"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7333],{4137:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=s(a),k=r,g=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1275:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(4137)),i=["components"],o={title:"Snowflake",sidebar_label:"Snowflake",slug:"/metadata-ingestion/source_docs/snowflake",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/snowflake.md"},d="Snowflake",s={unversionedId:"metadata-ingestion/source_docs/snowflake",id:"metadata-ingestion/source_docs/snowflake",isDocsHomePage:!1,title:"Snowflake",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/snowflake.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/snowflake",permalink:"/docs/metadata-ingestion/source_docs/snowflake",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/snowflake.md",tags:[],version:"current",frontMatter:{title:"Snowflake",sidebar_label:"Snowflake",slug:"/metadata-ingestion/source_docs/snowflake",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/snowflake.md"},sidebar:"overviewSidebar",previous:{title:"SageMaker",permalink:"/docs/metadata-ingestion/source_docs/sagemaker"},next:{title:"SQL Profiles",permalink:"/docs/metadata-ingestion/source_docs/sql_profiles"}},p=[{value:"Setup",id:"setup",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3}],level:2},{value:"Capabilities",id:"capabilities",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[],level:2},{value:"Config details",id:"config-details",children:[],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Setup",id:"setup-1",children:[{value:"Prerequisites",id:"prerequisites-1",children:[],level:3}],level:2},{value:"Capabilities",id:"capabilities-1",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe-1",children:[],level:2},{value:"Config details",id:"config-details-1",children:[],level:2},{value:"Questions",id:"questions",children:[],level:2}],u={toc:p};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"snowflake"},"Snowflake"),(0,l.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"To install this plugin, run ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[snowflake]'"),"."),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"In order to execute this source, your Snowflake user will need to have specific privileges granted to it for reading metadata\nfrom your warehouse. You can create a DataHub-specific role, assign it the required privileges, and assign it to a new DataHub user\nby executing the following Snowflake commands from a user with the ",(0,l.kt)("inlineCode",{parentName:"p"},"ACCOUNTADMIN")," role: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create or replace role datahub_role;\n\n// Grant privileges to use and select from your target warehouses / dbs / schemas / tables\ngrant operate, usage on warehouse <your-warehouse> to role datahub_role;\ngrant usage on <your-database> to role datahub_role;\ngrant usage on all schemas in database <your-database> to role datahub_role; \ngrant select on all tables in database <your-database> to role datahub_role; \ngrant select on all external tables in database <your-database> to role datahub_role;\ngrant select on all views in database <your-database> to role datahub_role;\n\n// Grant privileges for all future schemas and tables created in a warehouse \ngrant usage on future schemas in database \"<your-database>\" to role datahub_role;\ngrant select on future tables in database \"<your-database>\" to role datahub_role;\n\n// Create a new DataHub user and assign the DataHub role to it \ncreate user datahub_user display_name = 'DataHub' password='' default_role = datahub_role default_warehouse = '<your-warehouse>';\n\n// Grant the datahub_role to the new DataHub user. \ngrant role datahub_role to user datahub_user;\n")),(0,l.kt)("p",null,"This represents the bare minimum privileges required to extract databases, schemas, views, tables from Snowflake. "),(0,l.kt)("p",null,"If you plan to enable extraction of table lineage, via the ",(0,l.kt)("inlineCode",{parentName:"p"},"include_table_lineage")," config flag, you'll also need to grant privileges\nto access the Snowflake Account Usage views. You can execute the following using the ",(0,l.kt)("inlineCode",{parentName:"p"},"ACCOUNTADMIN")," role to do so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"grant imported privileges on database snowflake to role datahub_role;\n")),(0,l.kt)("h2",{id:"capabilities"},"Capabilities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Details"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Platform Instance"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"link"))))),(0,l.kt)("p",null,"This plugin extracts the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Metadata for databases, schemas, views and tables"),(0,l.kt)("li",{parentName:"ul"},"Column types associated with each table"),(0,l.kt)("li",{parentName:"ul"},"Table, row, and column statistics via optional ",(0,l.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"SQL profiling")),(0,l.kt)("li",{parentName:"ul"},"Table lineage.")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can also get fine-grained usage statistics for Snowflake using the ",(0,l.kt)("inlineCode",{parentName:"p"},"snowflake-usage")," source described below."))),(0,l.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: snowflake\n  config:\n    # Coordinates\n    host_port: account_name\n    warehouse: "COMPUTE_WH"\n\n    # Credentials\n    username: user\n    password: pass\n    role: "accountadmin"\n\nsink:\n  # sink configs\n')),(0,l.kt)("h2",{id:"config-details"},"Config details"),(0,l.kt)("p",null,"Like all SQL-based sources, the Snowflake integration supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stale Metadata Deletion: See ",(0,l.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/stateful_ingestion"},"here")," for more details on configuration."),(0,l.kt)("li",{parentName:"ul"},"SQL Profiling: See ",(0,l.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"here")," for more details on configuration.")),(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"authentication_type")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DEFAULT_AUTHENTICATOR"')),(0,l.kt)("td",{parentName:"tr",align:null},"The type of authenticator to use when connecting to Snowflake. Supports ",(0,l.kt)("inlineCode",{parentName:"td"},'"DEFAULT_AUTHENTICATOR"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"EXTERNAL_BROWSER_AUTHENTICATOR"')," and ",(0,l.kt)("inlineCode",{parentName:"td"},'"KEY_PAIR_AUTHENTICATOR"'),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"username")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake username.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake password.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"private_key_path")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The path to the private key if using key pair authentication. See: ",(0,l.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/user-guide/key-pair-auth.html"},"https://docs.snowflake.com/en/user-guide/key-pair-auth.html"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"private_key_password")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Password for your private key if using key pair authentication.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host_port")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake host URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"warehouse")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake warehouse.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"role")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake role.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"env")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,l.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"platform_instance")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"The Platform instance to use while constructing URNs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options.<option>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Any options specified here will be passed to SQLAlchemy's ",(0,l.kt)("inlineCode",{parentName:"td"},"create_engine")," as kwargs.",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine")," for details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database_pattern.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for databases to include in ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database_pattern.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"^UTIL_DB$" '),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},'"^SNOWFLAKE$"'),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},'"^SNOWFLAKE_SAMPLE_DATA$"')),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for databases to exclude from ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database_pattern.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to include in ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to exclude from ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema_pattern.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for schemas to include in ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema_pattern.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for schemas to exclude from ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema_pattern.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"view_pattern.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for views to include in ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"view_pattern.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for views to exclude from ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"view_pattern.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"include_tables")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether tables should be ingested.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"include_views")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether views should be ingested.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"include_table_lineage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"If enabled, populates the snowflake table-to-table and s3-to-snowflake table lineage. Requires role to be ",(0,l.kt)("inlineCode",{parentName:"td"},"accountadmin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bucket_duration")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DAY"')),(0,l.kt)("td",{parentName:"tr",align:null},"Duration to bucket lineage data extraction by. Can be ",(0,l.kt)("inlineCode",{parentName:"td"},'"DAY"')," or ",(0,l.kt)("inlineCode",{parentName:"td"},'"HOUR"'),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start_time")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Start of last full day in UTC (or hour, depending on ",(0,l.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"Earliest time of lineage data to consider. For the bootstrap run, set it as far back in time as possible.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"end_time")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"End of last full day in UTC (or hour, depending on ",(0,l.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest time of lineage data to consider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"profiling")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"See the defaults for ",(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/sql_profiles#Config-details"},"profiling config"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/sql_profiles#Config-details"},"profiling config"),".")))),(0,l.kt)("h2",{id:"compatibility"},"Compatibility"),(0,l.kt)("p",null,"Table lineage requires Snowflake's ",(0,l.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/access-history.html"},"Access History")," feature."),(0,l.kt)("h1",{id:"snowflake-usage-stats"},"Snowflake Usage Stats"),(0,l.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,l.kt)("h2",{id:"setup-1"},"Setup"),(0,l.kt)("p",null,"To install this plugin, run ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[snowflake-usage]'"),"."),(0,l.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,l.kt)("p",null,"In order to execute the snowflake-usage source, your Snowflake user will need to have specific privileges granted to it. Specifically,\nyou'll need to grant access to the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/account-usage.html"},"Account Usage")," system tables, using which the DataHub source extracts information. Assuming\nyou've followed the steps outlined above to create a DataHub-specific User & Role, you'll simply need to execute the following commands\nin Snowflake from a user with the ",(0,l.kt)("inlineCode",{parentName:"p"},"ACCOUNTADMIN")," role: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"grant imported privileges on database snowflake to role datahub_role;\n")),(0,l.kt)("h2",{id:"capabilities-1"},"Capabilities"),(0,l.kt)("p",null,"This plugin extracts the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Statistics on queries issued and tables and columns accessed (excludes views)"),(0,l.kt)("li",{parentName:"ul"},"Aggregation of these statistics into buckets, by day or hour granularity")),(0,l.kt)("p",null,'Note: the user/role must have access to the account usage table. The "accountadmin" role has this by default, and other roles can be ',(0,l.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/account-usage.html#enabling-account-usage-for-other-roles"},"granted this permission"),"."),(0,l.kt)("p",null,"Note: the underlying access history views that we use are only available in Snowflake's enterprise edition or higher."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This source only does usage statistics. To get the tables, views, and schemas in your Snowflake warehouse, ingest using the ",(0,l.kt)("inlineCode",{parentName:"p"},"snowflake")," source described above."))),(0,l.kt)("h2",{id:"quickstart-recipe-1"},"Quickstart recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: snowflake-usage\n  config:\n    # Coordinates\n    host_port: account_name\n    warehouse: "COMPUTE_WH"\n\n    # Credentials\n    username: user\n    password: pass\n    role: "sysadmin"\n\n    # Options\n    top_n_queries: 10\n    email_domain: mycompany.com\nsink:\n  # sink configs\n')),(0,l.kt)("h2",{id:"config-details-1"},"Config details"),(0,l.kt)("p",null,"Snowflake integration also supports prevention of redundant reruns for the same data. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/source_docs/stateful_ingestion"},"here")," for more details on configuration."),(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"username")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake username.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake password.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host_port")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake host URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"warehouse")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake warehouse.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"role")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake role.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"env")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,l.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bucket_duration")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DAY"')),(0,l.kt)("td",{parentName:"tr",align:null},"Duration to bucket usage events by. Can be ",(0,l.kt)("inlineCode",{parentName:"td"},'"DAY"')," or ",(0,l.kt)("inlineCode",{parentName:"td"},'"HOUR"'),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_domain")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Email domain of your organisation so users can be displayed on UI appropriately.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start_time")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Last full day in UTC (or hour, depending on ",(0,l.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"Earliest date of usage logs to consider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"end_time")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Last full day in UTC (or hour, depending on ",(0,l.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest date of usage logs to consider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"top_n_queries")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of top queries to save to each table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"include_operational_stats")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to display operational stats.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database_pattern")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"^UTIL_DB$" '),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},'"^SNOWFLAKE$"'),(0,l.kt)("br",null),'`"^SNOWFLAKE_SAMPLE_DATA$"'),(0,l.kt)("td",{parentName:"tr",align:null},"Allow/deny patterns for db in snowflake dataset names.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema_pattern")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Allow/deny patterns for schema in snowflake dataset names.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"view_pattern")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Allow/deny patterns for views in snowflake dataset names.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Allow/deny patterns for tables in snowflake dataset names.")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"User's without email address will be ignored from usage if you don't set ",(0,l.kt)("inlineCode",{parentName:"p"},"email_domain")," property."))),(0,l.kt)("h1",{id:"compatibility-1"},"Compatibility"),(0,l.kt)("p",null,"Coming soon!"),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}m.isMDXComponent=!0}}]);