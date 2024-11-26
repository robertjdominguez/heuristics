import { type Heuristic } from './types';

export const heuristics: Heuristic[] = [
	{
		name: 'Survivorship Bias',
		description: "Don't be fooled by those who have made it.",
		slug: 'survivorship-bias',
		encountered: true
	},
	{
		name: "Swimmer's Body Illusion",
		description: 'Not everything that looks good is actually good for you.',
		slug: 'swimmers-body-illusion',
		encountered: false
	},
	{
		name: 'Clustering Illusion',
		description: 'Patterns where there are none.',
		slug: 'clustering-illusion',
		encountered: false
	},
	{
		name: 'Social Proof',
		description: "If everyone's doing it, it must be right...right?",
		slug: 'social-proof',
		encountered: false
	},
	{
		name: 'Sunk Cost Fallacy',
		description: 'Throwing good time after bad.',
		slug: 'sunk-cost-fallacy',
		encountered: false
	},
	{
		name: 'Reciprocity',
		description: "Scratch my back, and I'll feel obligated to scratch yours.",
		slug: 'reciprocity',
		encountered: false
	},
	{
		name: 'Confirmation Bias (Part 1)',
		description: 'Seeing only what you want to see.',
		slug: 'confirmation-bias-part-1',
		encountered: false
	},
	{
		name: 'Confirmation Bias (Part 2)',
		description: 'Finding evidence that fits your beliefs.',
		slug: 'confirmation-bias-part-2',
		encountered: false
	},
	{
		name: 'Authority Bias',
		description: 'Trusting the suit over the facts.',
		slug: 'authority-bias',
		encountered: false
	},
	{
		name: 'Contrast Effect',
		description: 'Comparing apples to oranges, and making bad choices.',
		slug: 'contrast-effect',
		encountered: false
	},
	{
		name: 'Availability Bias',
		description: "What’s most memorable isn't always most true.",
		slug: 'availability-bias',
		encountered: false
	},
	{
		name: "The It'll-Get-Worse-Before-It-Gets-Better Fallacy",
		description: 'Believing in pain today for gain tomorrow.',
		slug: 'itll-get-worse-before-it-gets-better-fallacy',
		encountered: false
	},
	{
		name: 'Story Bias',
		description: 'The story is great, but the facts are better.',
		slug: 'story-bias',
		encountered: false
	},
	{
		name: 'Hindsight Bias',
		description: 'I knew it all along... or did I?',
		slug: 'hindsight-bias',
		encountered: false
	},
	{
		name: 'Overconfidence Effect',
		description: 'When you think you know more than you do.',
		slug: 'overconfidence-effect',
		encountered: false
	},
	{
		name: 'Chauffeur Knowledge',
		description: 'Knowing the words, but not the song.',
		slug: 'chauffeur-knowledge',
		encountered: false
	},
	{
		name: 'Illusion of Control',
		description: 'You’re not as in charge as you think you are.',
		slug: 'illusion-of-control',
		encountered: false
	},
	{
		name: 'Incentive Super-Response Tendency',
		description: 'What gets rewarded gets repeated.',
		slug: 'incentive-super-response-tendency',
		encountered: false
	},
	{
		name: 'Regression to Mean',
		description: 'Things tend to even out over time.',
		slug: 'regression-to-mean',
		encountered: false
	},
	{
		name: 'Outcome Bias',
		description: 'Judging decisions by their results.',
		slug: 'outcome-bias',
		encountered: false
	},
	{
		name: 'Paradox of Choice',
		description: 'More options, more problems.',
		slug: 'paradox-of-choice',
		encountered: false
	},
	{
		name: 'Liking Bias',
		description: "It's hard to say no to someone you like.",
		slug: 'liking-bias',
		encountered: false
	},
	{
		name: 'Endowment Effect',
		description: 'Overvaluing what you own.',
		slug: 'endowment-effect',
		encountered: false
	},
	{
		name: 'Coincidence',
		description: 'Mistaking luck for patterns.',
		slug: 'coincidence',
		encountered: false
	},
	{
		name: 'Groupthink',
		description: 'When the group steers off course, and no one stops it.',
		slug: 'groupthink',
		encountered: false
	},
	{
		name: 'Neglect of Probability',
		description: 'Ignoring the odds when they matter most.',
		slug: 'neglect-of-probability',
		encountered: false
	},
	{
		name: 'Scarcity Error',
		description: 'Wanting it because there’s less of it.',
		slug: 'scarcity-error',
		encountered: false
	},
	{
		name: 'Base-Rate Neglect',
		description: 'Skipping the stats and going with the gut.',
		slug: 'base-rate-neglect',
		encountered: false
	},
	{
		name: 'Gambler’s Fallacy',
		description: 'Believing the dice have a memory.',
		slug: 'gamblers-fallacy',
		encountered: false
	},
	{
		name: 'The Anchor',
		description: 'First impressions stick, even when they’re wrong.',
		slug: 'the-anchor',
		encountered: false
	},
	{
		name: 'Induction',
		description: 'Predicting the future based on the past.',
		slug: 'induction',
		encountered: false
	},
	{
		name: 'Loss Aversion',
		description: 'Hating to lose more than loving to win.',
		slug: 'loss-aversion',
		encountered: false
	},
	{
		name: 'Social Loafing',
		description: 'Doing less because others will pick up the slack.',
		slug: 'social-loafing',
		encountered: false
	},
	{
		name: 'Exponential Growth',
		description: 'Small changes that lead to big leaps.',
		slug: 'exponential-growth',
		encountered: false
	},
	{
		name: 'Winner’s Curse',
		description: 'Winning at a price you’ll regret.',
		slug: 'winners-curse',
		encountered: false
	},
	{
		name: 'Fundamental Attribution Error',
		description: 'Blaming people, not circumstances.',
		slug: 'fundamental-attribution-error',
		encountered: false
	},
	{
		name: 'False Causality',
		description: 'Mistaking correlation for cause.',
		slug: 'false-causality',
		encountered: false
	},
	{
		name: 'Halo Effect',
		description: 'Letting one good trait overshadow everything else.',
		slug: 'halo-effect',
		encountered: false
	},
	{
		name: 'Alternative Paths',
		description: 'Forgetting the roads not taken.',
		slug: 'alternative-paths',
		encountered: false
	},
	{
		name: 'Forecast Illusion',
		description: "Confidence doesn't equal accuracy.",
		slug: 'forecast-illusion',
		encountered: false
	},
	{
		name: 'Conjunction Fallacy',
		description: 'Adding details makes it seem more likely.',
		slug: 'conjunction-fallacy',
		encountered: false
	},
	{
		name: 'Framing',
		description: 'How you say it changes what people think.',
		slug: 'framing',
		encountered: false
	},
	{
		name: 'Action Bias',
		description: "Feeling the need to do something, even if it's useless.",
		slug: 'action-bias',
		encountered: false
	},
	{
		name: 'Omission Bias',
		description: 'Ignoring the harm caused by doing nothing.',
		slug: 'omission-bias',
		encountered: false
	},
	{
		name: 'Self-Serving Bias',
		description: 'Claiming the credit, dodging the blame.',
		slug: 'self-serving-bias',
		encountered: false
	},
	{
		name: 'Hedonic Treadmill',
		description: 'Chasing happiness that never lasts.',
		slug: 'hedonic-treadmill',
		encountered: false
	},
	{
		name: 'Self-Selection Bias',
		description: 'When the data picks itself.',
		slug: 'self-selection-bias',
		encountered: false
	},
	{
		name: 'Association Bias',
		description: 'Guilt by association, or credit where it’s not due.',
		slug: 'association-bias',
		encountered: false
	},
	{
		name: 'Beginner’s Luck',
		description: "Success at the start doesn't guarantee more.",
		slug: 'beginners-luck',
		encountered: false
	},
	{
		name: 'Cognitive Dissonance',
		description: 'When your beliefs and actions don’t match.',
		slug: 'cognitive-dissonance',
		encountered: false
	},
	{
		name: 'Hyperbolic Discounting',
		description: 'Choosing smaller, sooner rewards over bigger, later ones.',
		slug: 'hyperbolic-discounting',
		encountered: false
	},
	{
		name: 'Because Justification',
		description: 'Adding weak reasons to make it sound better.',
		slug: 'because-justification',
		encountered: false
	},
	{
		name: 'Decision Fatigue',
		description: 'Too many choices drain your energy to decide.',
		slug: 'decision-fatigue',
		encountered: false
	},
	{
		name: 'Contagion Bias',
		description: "Believing something is 'infected' by its origin.",
		slug: 'contagion-bias',
		encountered: false
	},
	{
		name: 'The Problem with Averages',
		description: 'What’s true on average isn’t always true for you.',
		slug: 'problem-with-averages',
		encountered: false
	},
	{
		name: 'Motivation Crowding',
		description: 'Rewards that kill the joy of doing it for itself.',
		slug: 'motivation-crowding',
		encountered: false
	},
	{
		name: 'Twaddle Tendency',
		description: 'Overcomplicating simple things.',
		slug: 'twaddle-tendency',
		encountered: false
	},
	{
		name: 'Will Rogers Phenomenon',
		description: 'Shifting groups to make both seem better.',
		slug: 'will-rogers-phenomenon',
		encountered: false
	},
	{
		name: 'Information Bias',
		description: 'More information isn’t always better information.',
		slug: 'information-bias',
		encountered: false
	},
	{
		name: 'Effort Justification',
		description: 'Convincing yourself it was worth it.',
		slug: 'effort-justification',
		encountered: false
	},
	{
		name: 'The Law of Small Numbers',
		description: 'Drawing big conclusions from tiny samples.',
		slug: 'law-of-small-numbers',
		encountered: false
	},
	{
		name: 'Expectations',
		description: 'Seeing what you expect to see.',
		slug: 'expectations',
		encountered: false
	},
	{
		name: 'Simple Logic',
		description: 'When simplicity skips important details.',
		slug: 'simple-logic',
		encountered: false
	},
	{
		name: 'Forer Effect',
		description: 'Believing vague statements are uniquely about you.',
		slug: 'forer-effect',
		encountered: false
	},
	{
		name: "Volunteer's Folly",
		description: 'Doing too much because you care too much.',
		slug: 'volunteers-folly',
		encountered: false
	},
	{
		name: 'Affect Heuristic',
		description: 'Letting your feelings decide for you.',
		slug: 'affect-heuristic',
		encountered: false
	},
	{
		name: 'Introspection Illusion',
		description: 'Thinking you understand yourself perfectly.',
		slug: 'introspection-illusion',
		encountered: false
	},
	{
		name: 'Inability to Close Doors',
		description: 'Keeping options open when you shouldn’t.',
		slug: 'inability-to-close-doors',
		encountered: false
	},
	{
		name: 'Neomania',
		description: 'Chasing the new for its own sake.',
		slug: 'neomania',
		encountered: false
	},
	{
		name: 'Sleeper Effect',
		description: 'Believing information long after forgetting the source.',
		slug: 'sleeper-effect',
		encountered: false
	},
	{
		name: 'Alternative Blindness',
		description: 'Missing better options by focusing on the wrong ones.',
		slug: 'alternative-blindness',
		encountered: false
	},
	{
		name: 'Social Comparison Bias',
		description: 'Feeling worse by comparison.',
		slug: 'social-comparison-bias',
		encountered: false
	},
	{
		name: 'Primacy and Recency Effects',
		description: 'What’s first and last sticks best.',
		slug: 'primacy-and-recency-effects',
		encountered: false
	},
	{
		name: 'Not-Invented-Here Syndrome',
		description: 'Rejecting ideas because they’re from ‘outside.’',
		slug: 'not-invented-here-syndrome',
		encountered: false
	},
	{
		name: 'The Black Swan',
		description: 'Rare events that change everything.',
		slug: 'black-swan',
		encountered: false
	},
	{
		name: 'Domain Dependence',
		description: 'Skills don’t always transfer across contexts.',
		slug: 'domain-dependence',
		encountered: false
	},
	{
		name: 'False-Consensus Effect',
		description: 'Assuming everyone agrees with you.',
		slug: 'false-consensus-effect',
		encountered: false
	},
	{
		name: 'Falsification of History',
		description: 'Rewriting the past to fit the present.',
		slug: 'falsification-of-history',
		encountered: false
	},
	{
		name: 'In-Group Out-Group Bias',
		description: 'Favoring ‘us’ over ‘them.’',
		slug: 'in-group-out-group-bias',
		encountered: false
	},
	{
		name: 'Ambiguity Aversion',
		description: 'Avoiding choices with unknown risks.',
		slug: 'ambiguity-aversion',
		encountered: false
	},
	{
		name: 'Default Effect',
		description: 'Choosing the easiest option: doing nothing.',
		slug: 'default-effect',
		encountered: false
	},
	{
		name: 'Fear of Regret',
		description: 'Playing it safe to avoid second-guessing yourself.',
		slug: 'fear-of-regret',
		encountered: false
	},
	{
		name: 'Salience Effect',
		description: 'Overweighting the obvious.',
		slug: 'salience-effect',
		encountered: false
	},
	{
		name: 'House-Money Effect',
		description: 'Taking risks with what feels like a freebie.',
		slug: 'house-money-effect',
		encountered: false
	},
	{
		name: 'Procrastination',
		description: 'Tomorrow always feels like a better time to start.',
		slug: 'procrastination',
		encountered: false
	},
	{
		name: 'Envy',
		description: 'Wanting it just because they have it.',
		slug: 'envy',
		encountered: false
	},
	{
		name: 'Personification',
		description: 'Giving things human traits they don’t have.',
		slug: 'personification',
		encountered: false
	},
	{
		name: 'Illusion of Attention',
		description: 'Missing what’s right in front of you.',
		slug: 'illusion-of-attention',
		encountered: false
	},
	{
		name: 'Strategic Misrepresentation',
		description: 'Overselling to get what you want.',
		slug: 'strategic-misrepresentation',
		encountered: false
	},
	{
		name: 'Overthinking',
		description: 'Paralysis by analysis.',
		slug: 'overthinking',
		encountered: false
	},
	{
		name: 'Planning Fallacy',
		description: 'Underestimating the time things will take.',
		slug: 'planning-fallacy',
		encountered: false
	},
	{
		name: 'Déformation Professionnelle',
		description: 'Seeing the world only through your work lens.',
		slug: 'deformation-professionnelle',
		encountered: false
	},
	{
		name: 'Zeigarnik Effect',
		description: 'Unfinished tasks stick in your mind.',
		slug: 'zeigarnik-effect',
		encountered: false
	},
	{
		name: 'Illusion of Skill',
		description: 'Confusing practice with mastery.',
		slug: 'illusion-of-skill',
		encountered: false
	},
	{
		name: 'Feature-Positive Effect',
		description: 'Focusing on what’s there, ignoring what’s missing.',
		slug: 'feature-positive-effect',
		encountered: false
	},
	{
		name: 'Cherry Picking',
		description: 'Selecting only what supports your point.',
		slug: 'cherry-picking',
		encountered: false
	},
	{
		name: 'Fallacy of the Single Cause',
		description: 'Believing one thing explains it all.',
		slug: 'fallacy-of-the-single-cause',
		encountered: false
	},
	{
		name: 'Intention-to-Treat Error',
		description: 'Mixing intentions with actual results.',
		slug: 'intention-to-treat-error',
		encountered: false
	},
	{
		name: 'News Illusion',
		description: 'Mistaking noise for knowledge.',
		slug: 'news-illusion',
		encountered: false
	}
];
