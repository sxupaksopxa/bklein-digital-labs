## Building an AI Governance Classifier

*Published: July 2026*

### Why build another AI classifier?

As organizations increasingly adopt artificial intelligence, one question becomes more important than model performance alone:
**How can we quickly understand the governance implications of an AI system?**

Many existing benchmarks focus on accuracy, reasoning ability, or coding performance. While these are valuable, they do not answer questions such as:
- Could this AI system fall under the EU AI Act?
- What governance measures should be considered?
- What evidence should an organization prepare?
- How transparent is the system?

The AI Governance Model Lab was created to explore these questions through practical experimentation.

#### The objective

The project combines machine learning, semantic search, and governance principles to classify AI use cases according to their potential governance impact.
Instead of replacing legal or compliance experts, the goal is to provide an initial governance assessment that helps organizations identify potential risks and prepare appropriate documentation.
The classifier focuses on practical governance rather than legal interpretation.

#### Building the dataset

One of the biggest challenges was creating a meaningful dataset.
Unlike sentiment analysis or image recognition, there is no publicly available dataset specifically designed for AI governance classification.
The dataset therefore had to be created manually.
It currently contains nearly 200 governance-focused AI use cases covering scenarios such as:
- Customer support assistants
- Document summarization
- Recruitment systems
- Healthcare applications
- Credit scoring
- Surveillance
- Education
- Public administration

Each example was carefully reviewed and assigned a governance-oriented label.

#### Choosing the embedding model

Finding similar governance cases is often just as valuable as assigning a classification.
Several embedding models were evaluated before selecting **BAAI/bge-base-en-v1.5**.
The selected model provided strong semantic similarity while remaining efficient enough for practical experimentation.
Semantic search allows users to compare new AI systems with previously analyzed governance cases instead of relying solely on a classification score.

#### Adding Digital Trust Profile

One of the newest additions to the AI Governance Model Lab is the integration of **Digital Trust Profile (DTP)**.
After evaluating an AI system, users can now generate a machine-readable trust profile describing:
- Service ownership
- AI usage
- Human oversight
- Verification information
- Responsible organization
- Transparency metadata

This demonstrates how governance assessments can be combined with structured transparency information.
Rather than remaining a theoretical concept, Digital Trust Profile has become part of a working application.

#### Lessons learned

Building the classifier produced several valuable insights.

##### Governance is contextual

Two AI systems may use identical machine learning models while requiring very different governance approaches depending on their purpose and deployment.

##### Quality data matters more than quantity

Carefully designed governance examples produced better results than simply increasing the dataset size.

##### Explainability is essential

Users rarely want only a label.
They want to understand **why** the system reached that conclusion.
Providing similar governance cases and supporting evidence significantly improves confidence in the assessment.

##### Transparency builds trust

Governance classification alone is not enough.
Organizations increasingly need structured ways to communicate how AI is used and who is responsible for it.
This observation directly contributed to the development of Digital Trust Profile.

#### Current status

The AI Governance Model Lab is publicly available and continues to evolve.

Current capabilities include:

- Governance-focused AI classification
- Semantic similarity search
- Governance recommendations
- Digital Trust Profile generation
- Reference implementation for trust metadata

🔗 **Project Repository:** https://github.com/sxupaksopxa/ai-governance-model-lab

🌐 **Live Application:** https://ai-governance-model-lab.vercel.app

🌐 **Digital Trust Profile Demo:** https://ai-governance-model-lab.vercel.app/digital-trust

#### Looking ahead

Future work will focus on expanding governance datasets, improving explainability, and strengthening the integration between governance assessments and Digital Trust Profiles.
The long-term vision is to help organizations evaluate AI systems more effectively while making trust and transparency first-class elements of AI governance.

#### Closing thoughts

The AI Governance Model Lab started as an experiment in governance-focused machine learning.
It has since evolved into a platform for exploring AI classification, semantic search, explainability, and digital trust.
As AI systems become more capable and autonomous, governance and transparency will become increasingly important—not only for regulatory compliance but also for building confidence in the systems we create.