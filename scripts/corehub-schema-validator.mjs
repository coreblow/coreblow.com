export class CoreHubCatalogSchemaValidator {
  constructor(schema) {
    this.schema = schema;
    this.defs = schema?.$defs ?? {};
  }

  validate(value) {
    const errors = [];
    this.validateNode(this.schema, value, "catalog", errors);
    return errors;
  }

  validateNode(schema, value, path, errors) {
    if (!schema || typeof schema !== "object") return;
    if (schema.$ref) {
      this.validateNode(this.resolveRef(schema.$ref), value, path, errors);
      return;
    }
    if (schema.type === "array") {
      this.validateArray(schema, value, path, errors);
      return;
    }
    if (schema.type === "object") {
      this.validateObject(schema, value, path, errors);
      return;
    }
    if (schema.type === "string") {
      this.validateString(schema, value, path, errors);
    }
  }

  validateArray(schema, value, path, errors) {
    if (!Array.isArray(value)) {
      errors.push(`${path} must be an array`);
      return;
    }
    if (Number.isInteger(schema.minItems) && value.length < schema.minItems) {
      errors.push(`${path} must contain at least ${schema.minItems} item(s)`);
    }
    for (const [index, item] of value.entries()) {
      this.validateNode(schema.items, item, `${path}[${index}]`, errors);
    }
  }

  validateObject(schema, value, path, errors) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      errors.push(`${path} must be an object`);
      return;
    }

    const required = Array.isArray(schema.required) ? schema.required : [];
    for (const field of required) {
      if (value[field] === undefined) {
        errors.push(`${path}.${field} is required`);
      }
    }

    const properties = schema.properties ?? {};
    if (schema.additionalProperties === false) {
      for (const field of Object.keys(value)) {
        if (!Object.hasOwn(properties, field)) {
          errors.push(`${path}.${field} is not allowed`);
        }
      }
    }

    for (const [field, childSchema] of Object.entries(properties)) {
      if (value[field] !== undefined) {
        this.validateNode(childSchema, value[field], `${path}.${field}`, errors);
      }
    }
  }

  validateString(schema, value, path, errors) {
    if (typeof value !== "string") {
      errors.push(`${path} must be a string`);
      return;
    }
    if (Number.isInteger(schema.minLength) && value.length < schema.minLength) {
      errors.push(`${path} must not be empty`);
    }
    if (Array.isArray(schema.enum) && !schema.enum.includes(value)) {
      errors.push(`${path} must be one of ${schema.enum.join(", ")}`);
    }
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) {
      errors.push(`${path} must match ${schema.pattern}`);
    }
  }

  resolveRef(ref) {
    if (!ref.startsWith("#/$defs/")) {
      throw new Error(`Unsupported schema ref ${ref}`);
    }
    const name = ref.slice("#/$defs/".length);
    const schema = this.defs[name];
    if (!schema) {
      throw new Error(`Missing schema definition ${name}`);
    }
    return schema;
  }
}
