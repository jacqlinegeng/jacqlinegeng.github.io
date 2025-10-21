export interface Note {
  title: string;
  date: string;
  preview: string;
  content: string;
}

export const notes: Note[] = [
  {title: "machine learning meets brain imaging",
      date: "oct 20, 2025",
      preview: "sometimes, your research path finds you before you know...",
      content: `# Machine learning and deep learning in analyzing brain imaging data for disease classification and prediction

sometimes, your research path finds you before you know where you are going. that’s pretty much how I got pulled into the crosshairs of machine learning and neuroimaging. approximately a year ago, I made the decision to pursue a risky, and caffeine-fueled BCI project, where we took a non-invasive multi-modal approach (think fNIRS and EEG readings) to decode brain signals. while it was messy and ambitious, it also had a practical angle to it. looking back, the problem weren't the tools or even the noise in our data, ML and deep learning in neuroimaging are also not just buzz words.

over the years, emerging models have started to show trends in their improvement in accuracy and predicative analytics.

studies have shown deep convolutional networks, Vision Transformers, and multimodal fusion models outshining traditional methods, turning MRI, fMRI, and PET scans into predictive powerhouses for Alzheimer’s, glioblastoma, and more. models like ResNet and Vision Transformer slice through oceans of data with scalpel-like precision, finding subtle patterns clinicians can miss. (Here’s how the models stack up: see the graph below.)​

## model comparison chart
![Comparison of Deep Learning Models for Disease Classification from Brain Imaging](https://substackcdn.com/image/fetch/$s_!mhf2!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffdb4a62f-e87b-4fde-82c2-dd990415337c_2400x1600.png)
technical hitch? real-world clinical data is still pretty muddy. missing values, uneven slices, time-misaligned EEG and fNIRS signals, you name it. my short BCI adventure taught me that fusing these diverse streams means inventing better fixes for translation and alignment, not unlike translating a dialect into another language, but with brainwaves and photons.

the graph compares accuracy rates (CNN, ResNet, Vision Transformer, Multi-modal Fusion), drawing on research and review articles in Frontiers in Neuroinformatics, PubMed, and Nature (2025).​

while mentoring some junior students working on neurodegenerative disease classification projects at AI4ALL, I saw the same roadblocks reappear over and over again. nailing model performance when datasets are quirky, deciphering the “why?” inside the black box becomes increasingly crucial, to make predictions that mean something to clinicians. these issues go beyond Python scripts, they speak to trust and safety.

## where might neuro-ai go next?
there’s a steady movement toward cross-modal fusion, linking MRI, EEG, fNIRS, and even behavioral markers to build more dimensional diagnostic tools, making behavioral data more routine.

second, another trend seems to be standing out in transfer learning, which can cross boundaries where models trained on larger hospital scans will adapt to rural clinics everywhere after a bit of local fine-tuning.

and with AI, real-time AI dashboards for clinicians (smart overlays, risk scores, 3D scans linked to individual histories) will be the norm, not the exception.​ more energy seems to be spent around building clinician-ready dashboards, such as real-time overlays where risk scores, 3D imaging, and patient histories are easy to interpret, not just by data scientists but by doctors at the bedside. as Fei-Fei Li said, “AI is not a replacement, but a tool to augment human expertise”, and these platforms seem poised to do just that.

the spirit of today’s neuro-AI research feels undeniably collaborative, more transparent, and perhaps most importantly, more focused on the human element than ever before.
`
    },
  {title: "seq2seq chatbots: lessons from deep learning for domain-specific AI",
      date: "sept 7, 2025",
      preview: "what i've learned about seq2seq and its applications...",
      content: `# Seq2Seq architecture for AI chatbots

The world of Seq2Seq architecture for chatbots always feels like both a technical adventure and a philosophical journey. It's not merely about crunching numbers or stacking layers, but about discovering how neural networks, empowered by LSTM cells and attention mechanisms, manage to capture the subtle rhythms of human communication: short-lived queries and long-term context all at once.

## The Power of Attention
"Attention is all you need." That phrase from the deep learning canon resonates especially when diving into chatbot building for specialized domains. In revisiting the tourism chatbot study, it struck me how curation can unlock model power: attractions, amenities, packages, even ancillary services become nodes in a complex intent graph, demanding dedicated attention for reliable, nuanced answers.

There’s a roll-up-your-sleeves mindset at work. Starting from the raw text, passing through cleansing and tokenization, then padding sequences so our models don’t stumble over missing words. GloVe embeddings come into play, turning words into mathematical neighbors, which in turn helps the chatbot speak the “language of location.” The stratification of data (98% train, 1% each for validation/test) feels rigorous, almost ritualistic, but it’s the best way to ensure model generalization when new questions arise.

Hyperparameters are more than technical footnotes - they’re creative choices. Watching the C2 configuration (512 LSTMs, batch size eight, twenty epochs) outstrip the others, nearing 99% accuracy, I saw how tuning is its own art form. Complexity analysis, how attention or the Adam optimizer shifts performance which shows engineering is never just about brute computing, but about trade-offs, bottlenecks, and continuous refinement.

## Implications Beyond Code
What fascinated me most was the careful category-based dataset design. Rather than generic data dumps, researchers handpicked questions and topics for tourism, ensuring each “node” like accessibility or amenities had meaningful representation. This resonated with my own experience, that models are only as insightful as their data’s granularity. When a bot can answer not just “how do I get there?” but “is this site accessible for wheelchairs?” you see deep learning’s promise realized in practical, compassionate ways

## Broader Horizons
My reading led me to marvel at the breadth of neural applications: from heat transfer calculations to medical diagnosis and solar desalination. The techniques that work in chatbots, such as structured data, rigorous validation, modular Jupyter experimentation, they show up everywhere, giving deep learning models the flexibility to solve problems far beyond conversation.

Jupyter Notebooks, meanwhile, remain an unsung hero. They transform research notes and experimentation into living documents, where annotations meet code, and every tweak logs a new chapter in the AI journey.

## References
1. [Seq2Seq Model-Based Chatbot with LSTM and Attention Mechanism for Enhanced User Interaction, arXiv, 2024](https://arxiv.org/html/2501.00049v1)
2. [Expert Artificial Neural Network Applications for Science and Engineering, IGI Global](https://www.igi-global.com/book/expert-artificial-neural-network-applications/347395)
3. [Jupyter notebook best practices, Deepnote Guides](https://deepnote.com/guides/jupyter/how-to-optimize-jupyter-notebooks-for-machine-learning-projects)
`
    },
    {
      title: "deeper dive on reinforcement learning in credit risk modeling",
      date: "june 23, 2025",
      preview: "thoughts on RL in credik risk assessment...",
      content: `# Reinforcement Learning for Credit Risk

Building a deep learning model for credit risk assessment merges cutting-edge AI with practical finance, yielding real improvements in predicting loan defaults and managing risk. Recent research leverages complex neural architectures, advanced preprocessing, and novel reinforcement learning strategies to raise both accuracy and transparency in loan decision-making.

Traditional models like logistic regression offer interpretability but lag in predictive power as datasets grow in volume and complexity. Ensemble machine learning methods, i.e. XGBoost, Random Forest, and LightGBM, now dominate, as demonstrated in business case studies: XGBoost often yields top accuracy and precision (~88.7% and ~89.5%, respectively), thanks to robust handling of nonlinearity and imbalanced classes.

Deep neural networks, especially MLPs and LSTMs, excel at uncovering complex borrower patterns and sequential behaviors, achieving test set accuracies up to 95% in some real-world studies.

CNNs shine when leveraging structured data, while autoencoders flag fraudulent application anomalies and graph neural networks map hidden interconnections between entities.
![Model Accuracy Comparison for Credit Risk Assessment](https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/ef78bd4f94ce138e580b21b16eae4366/dc43d363-c94a-4ccd-adec-ef66218fc4c8/09b74ebf.png)
A major innovation comes from integrating reinforcement learning (RL) into credit scoring and underwriting. RL agents treat lenders as adaptive decision makers, continuously optimizing who to lend to, when, and at what terms, learning from real or simulated experience

Case studies show RL can outperform traditional static cutoff methods by maximizing long-term lender profits, dynamically adapting to changing applicant behavior and broader market patterns.Notably, RL allows banks to run customizable simulations, stress-test credit policies, and react in real time to new economic environments, providing an edge over classical prediction models.
![Profit Maximization Over Time: RL vs Static Thresholds](https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/ef78bd4f94ce138e580b21b16eae4366/fc879318-01f5-4059-b10a-8d524d9cbd45/c269aa51.png)
*This line chart illustrates how profits grow more rapidly under RL strategies, demonstrating operational impact over multiple periods.*

## Case study
A test on UAE banking data (Keras/TensorFlow) found a deep learning classifier correctly predicted 238 of 250 borrower defaults with 95.2% accuracy. Meanwhile, RL models, when optimizing acceptance thresholds, yielded statistically higher profits and lower default ratios compared to static acceptance criteria. “Deep learning is reshaping credit risk analysis, offering faster, more accurate, and more inclusive solutions for lenders and borrowers alike.” - [Advances in Deep Learning for Credit Risk Analysis - Debexpert](https://www.debexpert.com/blog/advances-in-deep-learning-for-credit-risk-analysis)

Modern credit risk assessment benefits from blending deep neural architectures, best-in-class ensemble methods, and evolving reinforcement learning strategies for robust, transparent, and adaptive decision-making.

Sources 
1. [Advances in Deep Learning for Credit Risk Analysis - Debexpert](https://www.debexpert.com/blog/advances-in-deep-learning-for-credit-risk-analysis)  
2. [Comparative Analysis of Machine Learning Models for Credit Risk - The American Journals](https://theamericanjournals.com/index.php/tajet/article/view/6029)  
3. [Reinforcement Learning in Credit Scoring and Underwriting - arXiv](https://arxiv.org/html/2212.07632v2)`
    },
    {
      title: "speed of iteration matters more than genius of idea",
      date: "march 30, 2024",
      preview: "ancient wisdom applied in the art of iteration...",
      content: `# Speed of iteration sometimes beats the genius of idea

What makes the Bay Area more interesting and filled with brilliant minds is its speed of iteration. I’ve seen this mindset more concentrated in San Francisco and the Bay Area than anywhere else. Iteration here isn’t just a buzzword, it’s a way of life. Founders launch bold experiments with the full expectation that many of them won’t work, but every setback is treated as a data point, not a defeat. It echoes the Stoic principle that the obstacle is the way. I’ve watched people treat a product hiccup or a market stumble not as something shameful, but as raw material to learn from and build on. Failure doesn’t freeze them. It pushes them forward.

The speed of iteration in the Bay can feel surreal. Investors ask for weekly updates, users give feedback in real time, and entire teams pivot in a single afternoon. I’ve been struck by how natural it feels for people here to release something rough, learn, and then reshape it overnight. It reminds me of Heraclitus’ idea that everything flows and nothing stands still. The culture accepts impermanence as a constant, much like Zen philosophy, where nothing is ever finished, only carried forward. Nietzsche would have called this an affirmation of becoming, embracing the chaos of creation rather than clinging to a finished state.

Outside the Bay, I’ve noticed things move differently. In Europe or Asia, founders often spend weeks debating pivots that would be executed in hours in San Francisco. There’s more fear of reputational risk, more pressure to avoid failure. The result is incremental change rather than bold leaps. By contrast, the Bay romanticizes the crash and rebuild cycle. Even mistakes are turned into origin myths. Twitter started from a failed podcasting project, Slack from a failed game. That willingness to risk collapse creates the space for reinvention.

At its core, the Bay’s culture blends ancient wisdom with modern systems thinking. Kierkegaard once said that to dare is to lose one’s footing momentarily, but not to dare is to lose oneself. Karl Popper’s philosophy of falsification also fits here: progress comes not from proving we’re right, but from disproving what doesn’t work. Nassim Taleb would call it antifragility, the ability to grow stronger through volatility and stress. In San Francisco, that translates into a culture that charges into uncertainty, adapts quickly, and turns every failure into a foundation for the next idea.`
    }
  ];