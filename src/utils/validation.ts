/**
 * Prop Validation Utilities
 * Runtime validation helpers for component props
 */

const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * Log a validation warning (only in development)
 */
function warn(message: string, componentName: string): void {
  if (isDevelopment) {
    console.warn(`[${componentName}] ${message}`);
  }
}

/**
 * Validate that a value is within a range
 */
export function validateRange(
  value: number,
  min: number,
  max: number,
  componentName: string,
  propName: string
): boolean {
  if (value < min || value > max) {
    warn(
      `${propName} (${value}) is outside valid range [${min}, ${max}]. Value will be clamped.`,
      componentName
    );
    return false;
  }
  return true;
}

/**
 * Validate that a value exists in an array of options
 */
export function validateValueInOptions<T>(
  value: T,
  options: T[],
  componentName: string,
  propName: string,
  getValue?: (option: T) => T
): boolean {
  const getVal = getValue || ((v: T) => v);
  const exists = options.some(opt => getVal(opt) === value);
  if (!exists && value !== undefined && value !== null && value !== '') {
    warn(
      `${propName} (${value}) does not exist in options.`,
      componentName
    );
    return false;
  }
  return true;
}

/**
 * Validate that an array has unique keys
 */
export function validateUniqueKeys<T>(
  items: T[],
  getKey: (item: T) => string,
  componentName: string,
  propName: string
): boolean {
  const keys = items.map(getKey);
  const duplicates = keys.filter((key, index) => keys.indexOf(key) !== index);
  if (duplicates.length > 0) {
    warn(
      `${propName} contains duplicate keys: ${duplicates.join(', ')}. Each item must have a unique key.`,
      componentName
    );
    return false;
  }
  return true;
}

/**
 * Validate that an array has required structure
 */
export function validateArrayStructure<T>(
  items: T[],
  requiredFields: string[],
  componentName: string,
  propName: string
): boolean {
  if (!Array.isArray(items)) {
    warn(`${propName} must be an array.`, componentName);
    return false;
  }

  if (items.length === 0) {
    return true; // Empty array is valid
  }

  const firstItem = items[0] as any;
  const missingFields = requiredFields.filter(field => !(field in firstItem));

  if (missingFields.length > 0) {
    warn(
      `${propName} items must have the following fields: ${requiredFields.join(', ')}. Missing: ${missingFields.join(', ')}.`,
      componentName
    );
    return false;
  }

  return true;
}

/**
 * Validate that columns and data structure match
 */
export function validateTableStructure(
  columns: Array<{ key: string }>,
  data: Array<Record<string, any>>,
  componentName: string
): boolean {
  if (!Array.isArray(columns) || columns.length === 0) {
    warn('columns must be a non-empty array.', componentName);
    return false;
  }

  if (!Array.isArray(data)) {
    warn('data must be an array.', componentName);
    return false;
  }

  const columnKeys = columns.map(col => col.key);
  const duplicateKeys = columnKeys.filter((key, index) => columnKeys.indexOf(key) !== index);
  if (duplicateKeys.length > 0) {
    warn(`columns contain duplicate keys: ${duplicateKeys.join(', ')}.`, componentName);
    return false;
  }

  // Check if data rows have all column keys (optional, just warn)
  if (data.length > 0) {
    const firstRow = data[0];
    const missingKeys = columnKeys.filter(key => !(key in firstRow));
    if (missingKeys.length > 0 && isDevelopment) {
      // This is just a warning, not an error
      console.info(
        `[${componentName}] Some data rows may be missing column keys: ${missingKeys.join(', ')}.`
      );
    }
  }

  return true;
}

/**
 * Validate that a required prop is provided
 */
export function validateRequired<T>(
  value: T | undefined | null,
  componentName: string,
  propName: string
): boolean {
  if (value === undefined || value === null || value === '') {
    warn(`${propName} is required but was not provided.`, componentName);
    return false;
  }
  return true;
}

/**
 * Validate that children is a valid React element
 */
export function validateReactElement(
  children: any,
  componentName: string,
  propName: string = 'children'
): boolean {
  if (!children || typeof children !== 'object' || !('$$typeof' in children)) {
    warn(`${propName} must be a valid React element.`, componentName);
    return false;
  }
  return true;
}

/**
 * Validate that a number is positive
 */
export function validatePositive(
  value: number,
  componentName: string,
  propName: string
): boolean {
  if (value <= 0) {
    warn(`${propName} must be a positive number. Got: ${value}`, componentName);
    return false;
  }
  return true;
}

/**
 * Validate that width/size values are valid
 */
export function validateSize(
  size: string | number | undefined,
  componentName: string,
  propName: string
): boolean {
  if (size === undefined) return true;
  
  if (typeof size === 'number' && size <= 0) {
    warn(`${propName} must be a positive number. Got: ${size}`, componentName);
    return false;
  }

  if (typeof size === 'string') {
    // Basic validation for CSS values
    const validPattern = /^(\d+(\.\d+)?(px|rem|em|%|vh|vw)|auto)$/;
    if (!validPattern.test(size.trim())) {
      warn(`${propName} must be a valid CSS size value. Got: ${size}`, componentName);
      return false;
    }
  }

  return true;
}


