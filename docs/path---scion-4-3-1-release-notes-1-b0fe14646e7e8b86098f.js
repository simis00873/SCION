webpackJsonp([73150101256528],{1240:function(s,t){s.exports={data:{site:{siteMetadata:{title:"SCION",author:"Jacob Beard"}},markdownRemark:{id:"/Users/jbeard4/workspace/scion-scxml-platform/projects/sciblog/src/pages/scion-4.3.1-release-notes-1/index.md absPath of file >>> MarkdownRemark",html:'<p><em>tl;dr The first and main feature that was added to SCION@4.3.1 is full compliance with the <a href="https://www.w3.org/Voice/2013/scxml-irp/">SCXML IRP test suite</a> (passes all of the required, automated tests).</em></p>\n<p>Notably, this includes support for SCXML’s <code class="language-text">&lt;invoke&gt;</code> tag; provides a compliant implementation of the “Algorithm for SCXML Interpretation” described in <a href="https://www.w3.org/TR/scxml/#AlgorithmforSCXMLInterpretation">Appendix D</a> of the specification; and fixes <a href="https://github.com/jbeard4/SCION-CORE/issues/28">several</a> <a href="https://github.com/jbeard4/SCION/issues/390">open</a> <a href="https://github.com/jbeard4/SCION-CORE/issues/50">issues</a>.</p>\n<p>There are many different semantics for Statecharts family of languages (for a\ngood overview of various Statechart semantics, see <a href="https://cs.uwaterloo.ca/~nday/pdf/techreps/2009-05-EsDa-tr.pdf">“Big-Step Semantics”</a> by\nShahram Esmaeilsabzali, Nancy A. Day, Joanne M. Atlee, and Jianwei Niu).\nSCION now implements by default the semantics described in <a href="https://www.w3.org/TR/scxml/">Appendix D of the SCXML specification</a>. This is a breaking change.</p>\n<p>Versions of SCION@3.3.1 implements a slightly different semantics,\ndescribed\n<a href="https://github.com/jbeard4/SCION/wiki/SCION-vs.-SCXML-Comparison">here</a>,\n<a href="https://github.com/jbeard4/SCION/wiki/Scion-Semantics">here</a>, and\n<a href="http://digitool.library.mcgill.ca/R/-?func=dbin-jump-full&#x26;object_id=116899&#x26;silo_library=GEN01">here</a>.\nThe semantics of SCION@3.3.1 have been deprecated in SCION@4.3.1 in favor\nof the semantics described in Appendix D of the SCXML specification. </p>\n<p>If you are upgrading an existing application, and you require support for\nSCION@3.3.1 semantics, the\n<a href="https://github.com/jbeard4/scion-core-legac://github.com/jbeard4/scion-core-legacy">scion-core-legacy</a>\nmodule provides a backwards-compatible, drop-in replacement module.</p>\n<p>Further documentation on the scion-core-legacy module will be forthcoming, but for now, you can find an example of its use <a href="https://github.com/jbeard4/SCION/blob/v4.3.1/test/node-test-server.js#L14-L16">here</a>, in the node-test-server. </p>\n<h1>Testing backwards-compatibility</h1>\n<p>This section describes the approach used by SCION for testing backwards-compatibility.</p>\n<p>The SCION node.js test framework supports testing the backwards-compatibility mode. In terms of what is being tested, all the tests that were passing in SCION@3.3.1 also pass in SCION@4.3.1. In fact, SCION@4.3.1 includes <em>more</em> tests for the legacy semantics than SCION@3.3.1 did:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token operator">></span> <span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'underscore\'</span><span class="token punctuation">)</span>\n<span class="token operator">></span> undefined\n<span class="token operator">></span> <span class="token operator">></span> <span class="token keyword">const</span> v431 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./4.3.1.json\'</span><span class="token punctuation">)</span>    <span class="token comment">//4.3.1 tests</span>\n<span class="token operator">></span> undefined\n<span class="token operator">></span> <span class="token operator">></span> <span class="token keyword">const</span> v331 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./3.3.1.json\'</span><span class="token punctuation">)</span>    <span class="token comment">//3.3.1 tests</span>\n<span class="token operator">></span> _<span class="token punctuation">.</span><span class="token function">difference</span><span class="token punctuation">(</span>v431<span class="token punctuation">,</span> v331<span class="token punctuation">)</span>\n<span class="token punctuation">[</span> <span class="token string">\'node_modules/scxml-test-framework/test/actionSend/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/assign-current-small-step/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/assign/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/atom3-basic-tests/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/basic/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/cond-js/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/data/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/default-initial-state/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/delayedSend/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/documentOrder/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/error/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/foreach/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/hierarchy+documentOrder/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/hierarchy/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/history/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/if-else/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/in/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/internal-transitions/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/more-parallel/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/multiple-events-per-transition/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/parallel+interrupt/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/parallel/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/script/*.scxml\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'node_modules/scxml-test-framework/test/send-idlocation/*.scxml\'</span> <span class="token punctuation">]</span>\n<span class="token operator">></span> _<span class="token punctuation">.</span><span class="token function">difference</span><span class="token punctuation">(</span>v331<span class="token punctuation">,</span> v431<span class="token punctuation">)</span>\n<span class="token punctuation">[</span> <span class="token string">\'node_modules/scxml-test-framework/test/w3c-ecma/test201.txml.scxml\'</span> <span class="token punctuation">]</span></code></pre>\n      </div>\n<p><code class="language-text">w3c-ecma/test201.txml.scxml</code> is an optional test for the Basic HTTP Event I/O Processor defined in the specification, which SCION does not support. I believe it was listed in 3.3.1 erroneously, and I removed the test for it.</p>\n<p>For tests that are shared between Appendix D and the legacy semantics, two different test scripts are sometimes needed, because the semantics change the outcome of the test. For this, a special property <code class="language-text">legacySemantics</code> has been added to the JSON test scripts in scxml-test-framework, which describes the test used for the legacy semantics. Currently, the following test scripts required changes because of different semantics regarding transition priority:</p>\n<ul>\n<li><a href="https://github.com/jbeard4/scxml-test-framework/blob/2.0.0/test/more-parallel/test10.json">more-parallel/test10.json</a></li>\n<li><a href="https://github.com/jbeard4/scxml-test-framework/blob/2.0.0/test/more-parallel/test10b.json">more-parallel/test10b.json</a></li>\n<li><a href="https://github.com/jbeard4/scxml-test-framework/blob/2.0.0/test/more-parallel/test2.json">more-parallel/test2.json</a></li>\n<li><a href="https://github.com/jbeard4/scxml-test-framework/blob/2.0.0/test/more-parallel/test3.json">more-parallel/test3.json</a></li>\n<li><a href="https://github.com/jbeard4/scxml-test-framework/blob/2.0.0/test/more-parallel/test6.json">more-parallel/test6.json</a></li>\n<li><a href="https://github.com/jbeard4/scxml-test-framework/blob/2.0.0/test/parallel+interrupt/test21.json">parallel+interrupt/test21.json</a></li>\n<li><a href="https://github.com/jbeard4/scxml-test-framework/blob/2.0.0/test/parallel+interrupt/test21b.json">parallel+interrupt/test21b.json</a></li>\n<li><a href="https://github.com/jbeard4/scxml-test-framework/blob/2.0.0/test/parallel+interrupt/test7.json">parallel+interrupt/test7.json</a></li>\n</ul>\n<p>You can run the tests for legacy semantics with the following invocation:</p>\n<p><code class="language-text">grunt test --legacy-semantics</code></p>\n<h1>Support for <code class="language-text">&lt;invoke&gt;</code> in legacy semantics</h1>\n<p>Note that <code class="language-text">&lt;invoke&gt;</code> is not currently supported in the legacy semantics. It does work, but it will invoke a new session with the Appendix D semantics. I could add an API to configure SCION to start new invoked sessions with legacy semantics, if people report this as a desirable feature.</p>',frontmatter:{title:"SCION@4.3.1 Release Notes, Part 1",date:"June 26, 2018"}}},pathContext:{slug:"/scion-4.3.1-release-notes-1/",previous:{fields:{slug:"/the-next-step-in-the-evolution-of-scion/"},frontmatter:{title:"The Next Step in the Evolution of SCION, a.k.a. Scion-ng, a.k.a. SCION-core, a.k.a. SCION 1.0.0"}},next:null}}}});
//# sourceMappingURL=path---scion-4-3-1-release-notes-1-b0fe14646e7e8b86098f.js.map