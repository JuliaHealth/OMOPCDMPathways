import{_ as e,c as t,o,a6 as r}from"./chunks/framework.BBRSGyax.js";const f=JSON.parse('{"title":"API","description":"","frontmatter":{},"headers":[],"relativePath":"api.md","filePath":"api.md","lastUpdated":null}'),a={name:"api.md"},i=r('<h1 id="API" tabindex="-1">API <a class="header-anchor" href="#API" aria-label="Permalink to &quot;API {#API}&quot;">​</a></h1><p>This is a list of documentation associated with every single <strong>exported</strong> function from <code>OMOPCDMPathways</code>. There are a few different sections with a brief explanation of what these sections are followed by relevant functions.</p><h2 id="Pre-Processing" tabindex="-1">Pre-Processing <a class="header-anchor" href="#Pre-Processing" aria-label="Permalink to &quot;Pre-Processing {#Pre-Processing}&quot;">​</a></h2><p>This family of functions are dedicated to pre-process the Data.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="OMOPCDMPathways.Period_prior_to_index" href="#OMOPCDMPathways.Period_prior_to_index">#</a> <b><u>OMOPCDMPathways.Period_prior_to_index</u></b> — <i>Function</i>. <p>function Period_prior_to_index(cohort_id::Vector, conn; date_prior=Day(100), tab=cohort)</p><p>Given a vector of cohort IDs, this function returna a DataFrame with the cohort_start_date adjusted by the date_prior.</p><p><strong>Arguments:</strong></p><ul><li><p><code>cohort_id</code> - vector of cohort IDs</p></li><li><p><code>conn</code> - database connection</p></li></ul><p><strong>Keyword Arguments:</strong></p><ul><li><p><code>date_prior</code> - period prior to the index date; default is 100 days</p></li><li><p><code>tab</code> - the <code>SQLTable</code> representing the cohort table; default <code>cohort</code></p></li></ul><p><strong>Returns</strong></p><ul><li>DataFrame with the cohort_start_date adjusted by the date_prior.</li></ul><p><a href="https://github.com/JuliaHealth/OMOPCDMPathways.jl/blob/ae1c45cb17c17bf3dc7441f811d6888de0c4eb53/src/preprocessing.jl#L63-L81" target="_blank" rel="noreferrer">source</a></p><p>function Period_prior_to_index(person_ids::Vector, start_date_on_person::Function, conn; date_prior=Day(100))</p><p>Given a vector of person IDs, this function returns a DataFrame with the cohort_start_date adjusted by the date_prior.</p><p><strong>Arguments:</strong></p><ul><li><p><code>person_ids</code> - vector of person IDs</p></li><li><p><code>start_date_on_person</code> - function that returns the SQL query to get the start date of the person</p></li><li><p><code>conn</code> - database connection</p></li></ul><p><strong>Keyword Arguments:</strong></p><ul><li><code>date_prior</code> - period prior to the index date; default is 100 days</li></ul><p><strong>Returns</strong></p><ul><li>DataFrame with the cohort_start_date adjusted by the date_prior.</li></ul><p><a href="https://github.com/JuliaHealth/OMOPCDMPathways.jl/blob/ae1c45cb17c17bf3dc7441f811d6888de0c4eb53/src/preprocessing.jl#L104-L122" target="_blank" rel="noreferrer">source</a></p></div><br>',6),s=[i];function n(d,c,p,l,h,_){return o(),t("div",null,s)}const P=e(a,[["render",n]]);export{f as __pageData,P as default};
