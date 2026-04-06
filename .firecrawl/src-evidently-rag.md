[📚 LLM-as-a-Judge: a Complete Guide on Using LLMs for Evaluations.  Get your copy](https://www.evidentlyai.com/llm-judge-guide)![](https://cdn.prod.website-files.com/660ef16a9e0687d9cc2746d7/660ef16a9e0687d9cc2747cf_vector.svg)

[![](https://cdn.prod.website-files.com/660ef16a9e0687d9cc2746d7/66180fbf4f40e9ed73ca2d39_evidently_ai_logo_fi.png)](https://www.evidentlyai.com/)

[Log in](https://app.evidently.cloud/auth) [Get demo](https://www.evidentlyai.com/get-demo)

![Icon](https://cdn.prod.website-files.com/660ef16a9e0687d9cc2746d7/664abe8f5bd7dda2d12a1e6d_list-bold.svg)

[**LLM Evals**](https://www.evidentlyai.com/blog-category/llm-evals)

# 10 RAG examples and use cases from real companies

Last updated:

July 23, 2025

Published:

February 13, 2025

![](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/67ae071d19fd7483fd4d24f5_rag%20examples_main-min.jpg)

[Back to all blogs ⟶](https://www.evidentlyai.com/blog)

contents **‍**

[🚚 Delivery support chatbot](https://www.evidentlyai.com/blog/rag-examples#delivery-support-chatbot)

[💻 Customer tech support](https://www.evidentlyai.com/blog/rag-examples#customer-tech-support)

[🏢 Internal policies chatbot](https://www.evidentlyai.com/blog/rag-examples#internal-policies-chatbot)

[🎓 AI Professor](https://www.evidentlyai.com/blog/rag-examples#ai-professor)

[🍿 Video summaries](https://www.evidentlyai.com/blog/rag-examples#video-summaries)

[🕵️‍♀️ Analytical fraud reports](https://www.evidentlyai.com/blog/rag-examples#analytical-fraud-reports)

[💼 Executive customer support](https://www.evidentlyai.com/blog/rag-examples#executive-customer-support)

[🔢 RAG for data tables](https://www.evidentlyai.com/blog/rag-examples#rag-for-data-tables)

[✅ Improved industry classification](https://www.evidentlyai.com/blog/rag-examples#improved-industry-classification)

[🚦 Locating internal policies](https://www.evidentlyai.com/blog/rag-examples#locating-internal-policies)

[📊 Evaluate RAG with Evidently](https://www.evidentlyai.com/blog/rag-examples#evaluate-rag-with-evidently)

Start testing your AI systems today

[Get demo](https://www.evidentlyai.com/get-demo) [Try open source](https://www.evidentlyai.com/evidently-oss)

Have you ever called an LLM-powered chatbot – like ChatGPT or Claude – on giving you outdated or incorrect information?

When generating a response, large language models (LLMs) rely on the datasets on which they were trained. However, because they are designed to predict text rather than retrieve exact facts, you can’t always rely on them for precise information. The training datasets are also usually limited to publicly available data and, in some domains, may quickly become obsolete.

When you create [LLM apps](https://www.evidentlyai.com/blog/llm-applications) for business use, relying on default model behavior isn’t enough. How can we make LLM systems — from support chatbots to AI assistants — more accurate and reliable?

One way is to use Retrieval-Augmented Generation (RAG). This approach helps ground LLM outputs in trusted data sources, such as company policies or documents. For example, when a company uses RAG for customer support, the AI would search through support documentation before responding to a customer query, ensuring the answer aligns with current company guidelines.

![High-level RAG architecture](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/67ab4219bea97e1dd6f543a2_2llm_evals_2.png)

_High-level RAG architecture_

This approach has several benefits:

- You provide up-to-date and domain-specific knowledge to the LLM model to reduce [hallucinations](https://www.evidentlyai.com/blog/llm-hallucination-examples) and improve response accuracy.
- RAG can give source citations along with its responses, making it easier to verify its claims.
- By pulling user-specific data, RAG can generate responses tailored to individual users.

In this blog, we compiled 10 real-world examples of how companies apply RAG to improve customer experience, automate routine tasks, and improve productivity.

> **Using RAG?** Check out this in-depth [guide on RAG evaluation](https://www.evidentlyai.com/llm-guide/rag-evaluation).

## 🚚 Delivery support chatbot

Doordash, a food delivery company, [enhances delivery support](https://careersatdoordash.com/blog/large-language-modules-based-dasher-support-automation/) with a RAG-based chatbot. The company developed an in-house solution that combines three key components: the RAG system, the LLM guardrail, and the [LLM judge](https://www.evidentlyai.com/llm-guide/llm-as-a-judge).

When a “Dasher,” an independent contractor who does deliveries through DoorDash, reports a problem, the system first condenses the conversation to grasp the core issue accurately. Using this summary, it then searches the knowledge base for the most relevant articles and past resolved cases. The retrieved information is fed into an LLM, which crafts a coherent and contextually appropriate response tailored to Dasher's query.

To maintain the high quality of the system’s responses, DoorDash implemented the **LLM Guardrail system**, an online monitoring tool that evaluates each LLM-generated response for accuracy and compliance. It helps prevent hallucinations and filter out responses that violate company policies.

To monitor the system quality over time, DoorDash uses an **LLM Judge** that assesses the chatbot's performance across five [LLM evaluation metrics](https://www.evidentlyai.com/llm-guide/llm-evaluation-metrics): retrieval correctness, response accuracy, grammar and language accuracy, coherence to context, and relevance to the Dasher's request.

![DoorDash RAG system architecture](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/67ae0158f5be8a200ed28f5e_doordash_rag-min.png)

_DoorDash RAG-based support system. Source:_ [_Path to high-quality LLM-based Dasher support automation_](https://careersatdoordash.com/blog/large-language-modules-based-dasher-support-automation/)

## 💻 Customer tech support

Online professional platform LinkedIn [introduced](https://arxiv.org/pdf/2404.17723) a novel customer service question-answering method that combines RAG with a knowledge graph.

Instead of treating the corpus of past issue tracking tickets as plain text, the solution constructs a knowledge graph from historical issues, taking into account intra-issue structure and inter-issue relations. When a user asks a question, the system parses consumer queries and retrieves related sub-graphs from the knowledge graph to generate answers. This approach mitigates the effects of text segmentation and improves retrieval accuracy.

It has been deployed within LinkedIn’s customer service team, reducing the median per-issue resolution time by 28.6%.

![RAG with knowledge graph framework at LinkedIn](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/67ae01a8d5d8d323f16eef93_linkedin_rag-min.png)

_RAG with knowledge graph framework at LinkedIn. Source:_ [_Retrieval-Augmented Generation with Knowledge Graphs for Customer Service Question Answering_](https://arxiv.org/pdf/2404.17723)

## 🏢 Internal policies chatbot

Bell, a telecommunication services company, utilized RAG to [enhance](https://www.youtube.com/watch?v=w5FZh0R4JaQ) its knowledge management processes and ensure its employees have access to up-to-date company policies.

The company shared how it built a knowledge management component within the RAG system. Bell adopted modular document embedding pipelines that allow it to efficiently process and index raw documents from various sources. The solution supports both batch and incremental updates to the knowledge base and automatically updates the indexes when documents are added to or removed from their source location.

Bell treats each component as a service and applies DevOps principles while building and maintaining the system.

![Knowledge management solution for RAG system at Bell](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/67ae022a8b773ddc0cc91dea_bell_rag-min.png)

_Knowledge management solution for RAG system at Bell. Source:_ [_\[VIDEO\] Modular Solutions for Knowledge Management at scale in RAG Systems_](https://www.youtube.com/watch?v=w5FZh0R4JaQ)

## 🎓 AI Professor

Harvard Business School's Senior Lecturer, Jeffrey Bussgang, [created](https://www.linkedin.com/pulse/ai-professor-harvard-chatltv-jeffrey-bussgang-oiaie/) a RAG-based AI faculty chatbot to help him teach his entrepreneurship course. The chatbot, ChatLTV, helps students with course preparation — like clarifying complex concepts or finding additional information on case studies — as well as administrative matters.

ChatLTV was trained on the course corpus, including case studies, teaching notes, books, blog posts, and historical Q&A from the course's Slack channel. The chatbot is integrated into the course's Slack channel, allowing students to interact with it in private and public modes.

To respond to a student's question, the LLM is provided with the query and relevant context stored in a vector database. The most relevant content chunks are served to the LLM using OpenAI's API. To ensure ChatLTV’s responses are accurate, the course team used a mix of manual and automated testing. They used an **LLM judge** to compare the outputs to the ground-truth data and generate a quality score.

![ChatLTV tech stack](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/67ae0278e5d3ec2463a7f978_harvard_rag-min.png)

_ChatLTV tech stack. Source:_ [_An AI Professor at Harvard: ChatLTV_](https://www.linkedin.com/pulse/ai-professor-harvard-chatltv-jeffrey-bussgang-oiaie/)

## 🍿 Video summaries

Vimeo, a video hosting platform, enables users to [converse](https://medium.com/vimeo-engineering-blog/unlocking-knowledge-sharing-for-videos-with-rag-810ab496ae59) with videos. The company developed a RAG-based chatbot that can summarize video content, link to key moments, and suggest additional questions.

The first step of the implementation is to transform video content into text. The video transcript is then processed and saved in a vector database. Vimeo applies a bottom-up approach for the transcript database registration: they use several sizes of context windows, summarize long context, and create a description for the entire video.

When a user asks a question – e.g., “What is the video about?” – the system retrieves the relevant context from the database and passes it to the LLM to generate the answer. Along with the response, the chatbot outputs playable video moments supporting the answer.

![Vimeo RAG-based Q&A system](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/67ae02f8ab9c7d06384a4d18_vimeo_rag.webp)

_Vimeo RAG-based Q&A system. Source:_ [_Unlocking knowledge sharing for videos with RAG_](https://medium.com/vimeo-engineering-blog/unlocking-knowledge-sharing-for-videos-with-rag-810ab496ae59)

To make the experience more engaging, the chatbot also suggests pregenerated question/answer pairs that cover the most important moments in the video and questions related to the user's query.

## 🕵️‍♀️ Analytical fraud reports

Asian super-app Grab uses RAG-powered LLMs to [automate](https://engineering.grab.com/transforming-the-analytics-landscape-with-RAG-powered-LLM) routine analytical tasks like generating reports and performing fraud investigations.

Grab's **Report Summarizer** automatically generates and summarizes regular reports, significantly reducing manual effort. It integrates several in-house platforms to achieve this:

- Data-Arks is a Python-based API platform that houses frequently used SQL queries and Python functions packaged into individual APIs.
- Spellvault is an internal platform that stores, shares, and refines LLM prompts.

When a report is due, the process is triggered by calling the appropriate Data-Arks API to retrieve the necessary data. This data is then processed by Spellvault, which utilizes the LLM to generate a concise summary. The final report, comprising the data and its summary, is delivered to users via Slack. The company states that the automated report summarization saves 3-4 hours per report.

![Grab’s RAG-based report summarizer](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/67ae03591d9f7c5d9defa888_grab_rag-min.png)

_Grab’s RAG-based report summarizer. Source:_ [_Leveraging RAG-powered LLMs for Analytical Tasks_](https://engineering.grab.com/transforming-the-analytics-landscape-with-RAG-powered-LLM)

Grab also introduced **A\* bot**, an AI-powered assistant for streamlining fraud investigations. It utilizes a collection of frequently used queries packaged as Data-Arks APIs. When a user submits a prompt, the system selects the most relevant queries using RAG, executes them, and concisely summarizes the results through Slack. Here’s how a sample response from A\* bot looks like:

![Grab’s RAG-based A* bot](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/67ae03cb97a215cec779fb01_grab_rag2-min.png)

_Grab’s RAG-based A\* bot. Source:_ [_Leveraging RAG-powered LLMs for Analytical Tasks_](https://engineering.grab.com/transforming-the-analytics-landscape-with-RAG-powered-LLM)

RAG capabilities allow users from different teams and functions to self-serve and get interpretable outputs for any data use case.

## 💼 Executive customer support

Business information and content technology provider Thomson Reuters uses RAG to [improve](https://medium.com/tr-labs-ml-engineering-blog/better-customer-support-using-retrieval-augmented-generation-rag-at-thomson-reuters-4d140a6044c3) customer service. The company built a solution that helps customer support executives quickly access the most relevant information from a curated database in a chatty interface.

The system uses embeddings to find the most relevant documents from internal knowledge bases. To achieve this, the text is split into small chunks, and then each chunk is embedded and stored in a vector database. User questions are also converted into a vector embedding and then queried against the vector database to get the best matches.

Once relevant documents are retrieved, the seq-to-seq model refines and generates a well-structured response. The model tailors answers using retrieved knowledge, improving accuracy and reducing hallucinations.

![Processing and indexing Flow, Retrieval Flow](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/67ae0441d5b907bea5fc3156_thomson%20reuters_rag.webp)

_Processing and indexing Flow, Retrieval Flow. Source:_ [_Better Customer Support Using RAG at Thomson Reuters_](https://medium.com/tr-labs-ml-engineering-blog/better-customer-support-using-retrieval-augmented-generation-rag-at-thomson-reuters-4d140a6044c3)

The solution allows Thomson Reuters to provide support executives with accurate, up-to-date responses while maintaining conversational interaction.

## 🔢 RAG for data tables

Discovery platform Pinterest [helps](https://medium.com/pinterest-engineering/how-we-built-text-to-sql-at-pinterest-30bad30dabff) internal company data users write SQL queries to solve analytical problems.

The initial approach was rather straightforward. A user asked a question and chose the relevant data sources – tables – to be used to answer the question. That input was compiled into a text-to-SQL prompt and fed into an LLM that generated the response. The solution demonstrated decent results, but it turned out that identifying the correct tables to refer to was a significant challenge for users.

To solve this, Pinterest integrated RAG to guide users in selecting the right tables for their tasks. The system generates a vector index of tables’ summaries and transforms user questions into embeddings. Then, a similarity search is conducted to infer the top N suitable tables. The results are passed to the LLM, which selects the top K most suitable tables. Then, the text-to-SQL prompt is created and passed to the LLM to generate the response.

![Incorporating RAG for table selection at Pinterest](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/67ae0495e73417cd6dc1eb38_pinterest_rag.webp)

_Incorporating RAG for Table Selection. Source:_ [_How we built Text-to-SQL at Pinterest_](https://medium.com/pinterest-engineering/how-we-built-text-to-sql-at-pinterest-30bad30dabff)

## ✅ Improved industry classification

A fintech company Ramp used RAG to [improve](https://engineering.ramp.com/industry_classification) how they classified their customers and migrate to a standardized classification system.

Initially, the company relied on a homegrown classification that combined third-party data, sales inputs, and customer self-reporting. This often led to inconsistent or overly broad categorizations that made auditing and interpreting customer data difficult.

To solve this problem, Ramp built an in-house RAG-based industry classification system that enabled migration to a standardized classification framework (North American Industry Classification System, NAICS). Here’s how it works:

Relevant information about a customer business is transformed into vector representations to capture semantic meaning. These vectors are compared against a database of NAICS codes to identify the closest matches. The recommended codes are passed to an LLM to generate a final prediction.

Ramp uses internal services for embeddings and [LLM prompt evaluations,](https://www.evidentlyai.com/llm-guide/llm-evaluation) Clickhouse to calculate similarity scores, and Kafka to log intermediate results. The company also implemented guardrails to ensure the outputs are valid NAICS codes.

![Ramp’s RAG system design](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/67ae053c894708a134f79d32_ramp_rag.png)

_Ramp’s RAG system design. Source:_ [_From RAG to Richness: How Ramp Revamped Industry Classification_](https://engineering.ramp.com/industry_classification)

## 🚦 Locating internal policies

The Royal Bank of Canada (RBC) built [Arcane](https://www.youtube.com/watch?v=cqK42uTPUU4), a RAG system that points the bank’s specialists to the most relevant policies scattered across its internal web platform. Financial operations are complex, and it takes years to teach proprietary guidelines to trained banking professionals. Enabling specialists to locate relevant policies quickly can boost their productivity and streamline customer support.

Here’s how the Arcane experience looks: a bank specialist asks a question in a chatbot interface, and the system navigates through internal databases and extracts relevant information from documents, presenting it in a concise format and providing information sources.

One of the primary challenges the RBC addressed while developing Arcane was data parsing and chunking. The data were dispersed across various web platforms, proprietary sources of information, PDF documents, and Excel tables, making it difficult to access and retrieve relevant information efficiently.

## 📊 Evaluate RAG with Evidently

RAG helps ground LLM outputs in up-to-date, relevant information. Whether it's improving customer support, analyzing data, or making a company’s knowledge base more accessible, RAG helps to ensure AI systems provide trustworthy, contextual answers.

If you’re building a complex system like RAG, you need [evaluations](https://www.evidentlyai.com/blog/open-source-rag-evaluation-tool) to test it during development and production monitoring. That’s why we built [Evidently](https://www.evidentlyai.com/). Our open-source library, with over 25 million downloads, makes it easy to test and evaluate LLM-powered applications, from chatbots to RAG. It simplifies evaluation workflows, offering 100+ built-in checks and easy configuration of custom LLM judges for every use case.

We also provide [Evidently Cloud](https://www.evidentlyai.com/register), a no-code workspace for teams to collaborate on AI quality, testing, and monitoring and run complex evaluation workflows.

![Evaluate RAG with Evidently Cloud](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/66db320d8f662482a7c1113c_dashboard.gif)

Ready to test your RAG? [Sign up for free](https://www.evidentlyai.com/register) or [schedule a demo](https://www.evidentlyai.com/get-demo) to see Evidently Cloud in action. We're here to help you build with confidence!

written by

![](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/66266589dd958874dc9ded66_62bcd717c16504f4b3ff1053_unnamed-3-2.jpeg)

[**Dasha Maliugina** \\
Community Manager\\
\\
Evidently AI](https://www.evidentlyai.com/authors/dasha-maliugina)

[#llm](https://www.evidentlyai.com/blog-tag/llm)

[#text-data](https://www.evidentlyai.com/blog-tag/text-data)

share on

[![LinkedIn logo](https://cdn.prod.website-files.com/660ef16a9e0687d9cc2746d7/660ef16a9e0687d9cc27475f_Group%2068.svg)](https://www.linkedin.com/)[![Twitter logo](https://cdn.prod.website-files.com/660ef16a9e0687d9cc2746d7/665498e176df469709a54190_x-logo%20(1).svg)](https://twitter.com/)[![Facebook logo](https://cdn.prod.website-files.com/660ef16a9e0687d9cc2746d7/660ef16a9e0687d9cc274774_Group%2065.svg)](https://facebook.com/)

## You might also like

[![55 real-world LLM applications and use cases from top companies](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/66959816eb35f5a061495c6b_35%20llm%20applications_main_2_min.png)\\
\\
**Community**  **55 real-world LLM applications and use cases from top companies** \\
\\
How do companies use LLMs in production? We compiled 55 real-world LLM applications from companies that share their learnings from building LLM systems.](https://www.evidentlyai.com/blog/llm-applications)

[![LLM hallucinations and failures: lessons from 5 examples](https://cdn.prod.website-files.com/660ef16a9e0687d9cc27474a/66f3c98f0f3b6a95060ff63f_a-white-unicorn-in-a-fairy-tail%20(1).jpg)\\
\\
**Community**  **LLM hallucinations and failures: lessons from 5 examples** \\
\\
Real-world examples of LLM hallucinations and other failures that can occur in LLM-powered products in the wild, such as prompt injection and out-of-scope usage scenarios.](https://www.evidentlyai.com/blog/llm-hallucination-examples)

🏗 Free course "LLM evaluations for AI builders" with 10 code tutorials. [Sign up **⟶**](https://www.evidentlyai.com/llm-evaluation-course-practice)

[![](https://cdn.prod.website-files.com/660ef16a9e0687d9cc2746d7/66180fbf4f40e9ed73ca2d39_evidently_ai_logo_fi.png)](https://www.evidentlyai.com/)

[Log in](https://app.evidently.cloud/auth) [Get demo](https://www.evidentlyai.com/get-demo)

![Icon](https://cdn.prod.website-files.com/660ef16a9e0687d9cc2746d7/664abe8f5bd7dda2d12a1e6d_list-bold.svg)

## Start testing your AI systems today

Book a personalized 1:1 demo with our team or try open source.

[Get demo](https://www.evidentlyai.com/get-demo) [Try open source](https://www.evidentlyai.com/evidently-oss)

By clicking “Accept”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our [Privacy Policy](https://www.evidentlyai.com/privacy) for more information.

[Deny](https://www.evidentlyai.com/blog/rag-examples#) [Accept](https://www.evidentlyai.com/blog/rag-examples#)

Privacy Preferences

Essential cookies

Required

Marketing cookies

Essential

Personalization cookies

Essential

Analytics cookies

Essential

[Reject all cookies](https://www.evidentlyai.com/blog/rag-examples#) [Allow all cookies](https://www.evidentlyai.com/blog/rag-examples#) [Save preferences](https://www.evidentlyai.com/blog/rag-examples#)

Checking your Browser…

Verifying...

Stuck? [Troubleshoot](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/41qtl/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

Success!

Verification failed

[Troubleshoot](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/41qtl/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

Verification expired

[Refresh](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/41qtl/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

Verification expired

[Refresh](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/41qtl/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

[Troubleshoot](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/41qtl/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

[Privacy](https://www.cloudflare.com/privacypolicy/) • [Help](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/help)

Checking your Browser…

Verifying...

Stuck? [Troubleshoot](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/7cogy/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

Success!

Verification failed

[Troubleshoot](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/7cogy/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

Verification expired

[Refresh](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/7cogy/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

Verification expired

[Refresh](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/7cogy/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

[Troubleshoot](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/7cogy/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

[Privacy](https://www.cloudflare.com/privacypolicy/) • [Help](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/help)

Checking your Browser…

Verifying...

Stuck? [Troubleshoot](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/wppeg/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

Success!

Verification failed

[Troubleshoot](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/wppeg/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

Verification expired

[Refresh](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/wppeg/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

Verification expired

[Refresh](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/wppeg/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

[Troubleshoot](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/wppeg/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

[Privacy](https://www.cloudflare.com/privacypolicy/) • [Help](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/help)

Checking your Browser…

Verifying...

Stuck? [Troubleshoot](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/r6q70/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

Success!

Verification failed

[Troubleshoot](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/r6q70/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

Verification expired

[Refresh](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/r6q70/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

Verification expired

[Refresh](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/r6q70/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

[Troubleshoot](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/r6q70/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/new/normal?lang=auto#refresh)

[Privacy](https://www.cloudflare.com/privacypolicy/) • [Help](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/help)