import { useState } from "react";
import TopMenuBar from "../components/TopMenuBar";
import Dock from "../components/Dock";

const Writing = () => {
  const [selectedNote, setSelectedNote] = useState(0);

  const notes = [
    {
      title: "seq2seq chatbots: lessons from deep learning for domain-specific AI",
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
      preview: "Thoughts on writing maintainable and readable code...",
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
      title: "Building Inclusive Web Experiences",
      date: "June 5, 2024",
      preview: "Why accessibility should be at the core of every project...",
      content: `# Building Inclusive Web Experiences

The web should be accessible to everyone, regardless of their abilities or circumstances.

## Why Accessibility Matters

Accessibility isn't just about compliance - it's about empathy. When we build accessible websites, we create experiences that work for everyone.

## Key Principles

- **Perceivable** - Information must be presentable in ways users can perceive
- **Operable** - Interface components must be operable by all users
- **Understandable** - Information and UI operation must be understandable
- **Robust** - Content must be robust enough for various assistive technologies

## Practical Steps

1. Use semantic HTML
2. Provide alternative text for images
3. Ensure keyboard navigation
4. Maintain sufficient color contrast
5. Test with screen readers

Building inclusive experiences makes the web better for everyone.`
    }
  ];

  const parseContent = (content: string) => {

    const imageUrls = [
      'https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/ef78bd4f94ce138e580b21b16eae4366/dc43d363-c94a-4ccd-adec-ef66218fc4c8/09b74ebf.png',
      'https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/ef78bd4f94ce138e580b21b16eae4366/fc879318-01f5-4059-b10a-8d524d9cbd45/c269aa51.png'
    ];
    const parts = content.split(/(\[.*?\]\(.*?\)|\!\[.*?\]\(.*?\))/g);

    return parts.map((part, index) => {
      // Check if this part is a markdown image
      const imageMatch = part.match(/\!\[(.*?)\]\((.*?)\)/);
      if (imageMatch) {
        const [, altText, url] = imageMatch;
        return (
          <img
            key={index}
            src={url}
            alt={altText}
            className="max-w-full h-auto my-4 rounded-lg shadow-md"
          />
        );
      }

      // Check if this part is a markdown link
      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        const [, linkText, url] = linkMatch;

        // Check if this URL should be displayed as an image
        if (imageUrls.includes(url)) {
          return (
            <img
              key={index}
              src={url}
              alt={linkText}
              className="max-w-full h-auto my-4 rounded-lg shadow-md"
            />
          );
        }

        // Otherwise, render as a regular link
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {linkText}
          </a>
        );
      }

      // For non-link/non-image parts, preserve formatting
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopMenuBar />

      <div className="pt-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border-border rounded-xl shadow-lg border overflow-hidden">
            {/* Notes App Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <h1 className="text-lg font-semibold text-card-foreground">Writing</h1>
              <div className="w-16"></div>
            </div>

            <div className="flex h-[70vh]">
              {/* Sidebar with notes list */}
              <div className="w-1/3 border-r border-border bg-secondary">
                <div className="p-4 border-b border-border">
                  <h2 className="font-semibold text-secondary-foreground">All Notes</h2>
                </div>
                <div className="overflow-y-auto">
                  {notes.map((note, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedNote(index)}
                      className={`p-4 border-b border-border cursor-pointer transition-colors ${selectedNote === index ? 'bg-primary/20 border-l-4 border-l-primary' : ''
                        }`}
                    >
                      <h3 className="font-medium text-secondary-foreground mb-1">{note.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{note.date}</p>
                      <p className="text-sm text-muted-foreground opacity-75">{note.preview}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content area */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-8">
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-wrap font-sans text-card-foreground leading-relaxed">
                      {parseContent(notes[selectedNote].content)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dock />
    </div>
  );
};

export default Writing;