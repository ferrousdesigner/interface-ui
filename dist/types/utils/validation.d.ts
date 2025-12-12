/**
 * Prop Validation Utilities
 * Runtime validation helpers for component props
 */
/**
 * Validate that a value is within a range
 */
export declare function validateRange(value: number, min: number, max: number, componentName: string, propName: string): boolean;
/**
 * Validate that a value exists in an array of options
 */
export declare function validateValueInOptions<T>(value: T, options: T[], componentName: string, propName: string, getValue?: (option: T) => T): boolean;
/**
 * Validate that an array has unique keys
 */
export declare function validateUniqueKeys<T>(items: T[], getKey: (item: T) => string, componentName: string, propName: string): boolean;
/**
 * Validate that an array has required structure
 */
export declare function validateArrayStructure<T>(items: T[], requiredFields: string[], componentName: string, propName: string): boolean;
/**
 * Validate that columns and data structure match
 */
export declare function validateTableStructure(columns: Array<{
    key: string;
}>, data: Array<Record<string, any>>, componentName: string): boolean;
/**
 * Validate that a required prop is provided
 */
export declare function validateRequired<T>(value: T | undefined | null, componentName: string, propName: string): boolean;
/**
 * Validate that children is a valid React element
 */
export declare function validateReactElement(children: any, componentName: string, propName?: string): boolean;
/**
 * Validate that a number is positive
 */
export declare function validatePositive(value: number, componentName: string, propName: string): boolean;
/**
 * Validate that width/size values are valid
 */
export declare function validateSize(size: string | number | undefined, componentName: string, propName: string): boolean;
