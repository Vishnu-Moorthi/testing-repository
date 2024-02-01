export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any, watch: any, emitProbs: any;
/**
 * `ejs-grid` represents the VueJS Grid Component.
 * ```vue
 * <ejs-grid :dataSource='data' allowPaging='true' allowSorting='true'></ejs-grid>
 * ```
 */
export declare let GridComponent: any;
export declare type GridComponent = InstanceType<typeof GridComponent>;
export declare const GridPlugin: {
    name: string;
    install(Vue: any): void;
};
