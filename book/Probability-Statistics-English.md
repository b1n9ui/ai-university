# AI University · Probability & Statistics

From uncertainty to evidence-based decisions

English edition 1 · source v0.1.1 · AI-authored · CC0 text / MIT code · Not individually human-reviewed

Data and sampling, events and distributions, random variables, joint models, sampling limits, estimation, testing, regression, and Bayesian updating. Every lesson includes derivations, worked examples, exercise solutions, and local interactive demonstrations.

Scope: A complete introductory course in ten chapters and fifty lessons. The first half develops probability and sampling models; the second develops frequentist inference, basic linear models, and Beta–binomial Bayesian inference. Measure-theoretic probability, advanced stochastic processes, multiple regression, comprehensive experimental design, and advanced nonparametric methods belong to later courses.

Read the intuition, check the conditions, follow the derivations and examples, then try the exercises. Interactive diagrams are available online; finite sampling is not a mathematical proof.

## Contents

### Where Data Come From

- 1.1 Observational units and variables
- 1.2 Populations, samples, and selection bias
- 1.3 Random sampling and random assignment
- 1.4 Frequency plots, histograms, and empirical distributions
- 1.5 Mean, median, and spread

### Events and Probability

- 2.1 Sample spaces and events
- 2.2 Probability axioms and the addition rule
- 2.3 The product rule, permutations, and combinations
- 2.4 Conditional probability and the multiplication rule
- 2.5 Independence, disjointness, and repeated trials

### Random Variables and Average Behavior

- 3.1 Total probability and Bayes' rule
- 3.2 Random variables, mass functions, and CDFs
- 3.3 Expectation and linearity
- 3.4 Variance, standard deviation, and covariance terms
- 3.5 Markov and Chebyshev probability bounds

### Discrete Probability Models

- 4.1 Bernoulli and binomial distributions
- 4.2 Geometric and negative-binomial waiting times
- 4.3 Sampling without replacement and the hypergeometric law
- 4.4 Poisson counts and rare events
- 4.5 Choosing discrete models and approximations

### Continuous Probability Models

- 5.1 Densities and continuous CDFs
- 5.2 Uniform distributions and exponential waits
- 5.3 Normal distributions and standardization
- 5.4 Transforming variables: start with the CDF
- 5.5 Continuous moments and tail integrals

### Several Random Variables

- 6.1 Joint and marginal distributions
- 6.2 Conditional distributions and densities
- 6.3 Independent variables and product distributions
- 6.4 Covariance, correlation, and variance of a sum
- 6.5 Conditional expectation and total variance

### From Populations to Samples

- 7.1 The law of large numbers and relative frequency
- 7.2 The central limit theorem
- 7.3 Sample means and standard errors
- 7.4 Normal samples, chi-square, and $t$ distributions
- 7.5 Bootstrap: resampling from a sample

### Estimation and Confidence Intervals

- 8.1 Bias, consistency, and mean squared error
- 8.2 Method of moments and maximum likelihood
- 8.3 Confidence intervals for a mean and coverage
- 8.4 Proportion intervals: why zero width is misleading
- 8.5 Intervals for two means and paired differences

### Hypothesis Testing and Decisions

- 9.1 Null hypotheses, $p$-values, and Type I errors
- 9.2 One-sample tests for a mean
- 9.3 Proportion tests and exact binomial tails
- 9.4 Two-group tests and permutation reasoning
- 9.5 Power, effect size, and multiple comparisons

### Relationships, Models, and Updating

- 10.1 Contingency tables and chi-square tests
- 10.2 Least-squares lines and residuals
- 10.3 Slope tests, mean-response intervals, and prediction intervals
- 10.4 One-way analysis of variance
- 10.5 Beta–binomial updating and a complete analysis report

# Chapter 1 · Where Data Come From

How data were collected determines which conclusions they can support.

Goals:
- Identify observational units and variables
- Distinguish sampling from random assignment
- Describe data with graphs and summary statistics

## 1.1 Observational units and variables

*Decide what object each data row represents before interpreting its features.*

### The idea

Decide what object each data row represents before interpreting its features.

### Intuition

Two scores from one student are two measurements, not automatically two independent students.

### Another explanation

Interpret the variable first; numerical codes can be mere labels.

### Quick check

What type of variable is a student ID?

A. A numerical measurement
B. An object identifier
C. Random error

Answer: B. Numeric format does not determine statistical meaning.

### Identify the unit behind each row

Students, orders, and measurement times are different observational units. Specify the population, time range, and recording rules first.

### Distinguish variable types

Categorical variables identify groups; numerical variables measure meaningful quantities. Postal codes contain digits, but their arithmetic mean usually has no substantive meaning.

### Check duplicates and missingness

Duplicates alter weights, and missingness may relate to outcomes. Preserve missing-value markers and handling rules rather than silently entering zero.

### Definition and conditions

Variable interpretation depends on the observational unit and measurement rules.

$$
\text{data table}=\{(\text{unit}_i,\text{variable}_{i1},\ldots,\text{variable}_{ip})\}_{i=1}^{n}
$$

- Variable interpretation depends on the observational unit and measurement rules.
- Repeated measurements require attention to within-unit dependence.

### Derivation

Define the target population.

Once units are specified, record their variables.

For repeated units, distinguish the number of objects from the number of records.

$$
n_{\mathrm{rows}}\ne n_{\mathrm{people}}\quad\text{in general}
$$

### Interactive diagram

Does duplicating a person's record increase the number of study participants?

Compare object and row counts. The illustration does not treat duplicate records as independent samples.

Online diagram: #/lesson/ps-units?view=visual

### Guided experiment

1. **Objects: 4** Set the object count to $4$ and compare the figure and readouts.

Preset observation: At these parameters: objects $4$; record rows $8$.

2. **Objects: 1** Set the object count to $1$ and compare the figure and readouts.

Preset observation: At these parameters: objects $1$; record rows $2$.

3. **Objects: 10** Set the object count to $10$ and compare the figure and readouts.

Preset observation: At these parameters: objects $10$; record rows $20$.

### Worked examples

#### Example 1: People or records?

Three students are each measured twice. How many records and people are there?

- Two rows each give $3\times2=6$ rows.
- There are only three distinct study participants; independence also depends on sampling.

**Answer: Six records, three students.**

#### Example 2: Digits do not always measure quantity

Does averaging student IDs describe average achievement?

- IDs identify people.
- Scores are the numerical variable relevant to this question.

**Answer: No; the ID average has no such interpretation.**

### Common mistakes

- **Every number has a meaningful average** Interpret the variable first; numerical codes can be mere labels.

- **Missing means zero** Missing means unknown; zero means known to equal zero.

### Exercises and solutions

**1. Five households each record seven days of spending. How many rows are there?**

Hint: A household and time jointly identify a record.

Answer: $35$ rows.

- $5\times7=35$.

**2. What type of variable is satisfaction recorded as low, medium, high?**

Hint: Check whether the categories have an order.

Answer: An ordinal categorical variable.

- They are ordered, but spacing is undefined.

**3. May missing wages be entered as zero directly?**

Hint: Distinguish unrecorded from genuinely absent income.

Answer: Not without justification.

- Zero wages are a known value; missing wages are unknown.

**4. What goes wrong if repeated measurements from one person are treated as independent samples?**

Hint: Consider shared individual factors.

Answer: The independence assumption may fail.

- Within-person measurements often correlate, potentially understating uncertainty.

Prerequisites: Elementary algebra.

## 1.2 Populations, samples, and selection bias

*Whom you collect data from determines whom your conclusions can represent.*

### The idea

Whom you collect data from determines whom your conclusions can represent.

### Intuition

Even a huge voluntary survey may measure only those willing to respond.

### Another explanation

Randomness needs a specified probability mechanism.

### Quick check

Which necessarily disappears as sample size grows?

A. Selection bias
B. All measurement errors
C. Neither necessarily disappears

Answer: C. Sample size does not replace representativeness.

### State the target population

The population is every unit of interest; the sampling frame is the list actually available for selection. They may differ.

### Understand random sampling

Simple random sampling gives each fixed-size sample equal probability. Stratified sampling draws randomly within groups, then combines them using population proportions.

### Separate bias from variation

Standard errors describe random sampling variation, not systematic bias from coverage gaps, nonresponse, or measurement error.

### Definition and conditions

A stratified population mean uses population group weights, not an arbitrary average of group means.

$$
\hat\mu=\sum_{h=1}^{H}W_h\bar x_h,\qquad\sum_hW_h=1
$$

- A stratified population mean uses population group weights, not an arbitrary average of group means.
- Within-group samples must represent their groups; weighting cannot repair every unobserved selection mechanism.

### Derivation

Split the population mean by groups.

$$
\mu=\sum_hW_h\mu_h
$$

Replace unknown group means with sample group means.

$$
\mu_h\longmapsto\bar x_h
$$

Retain population weights so oversampling does not alter the target composition.

$$
\hat\mu=\sum_hW_h\bar x_h
$$

### Interactive diagram

Change the sampled group proportions. How does the sample-composition mean differ from the population mean?

Group means stay fixed while sample composition changes; population weights are displayed separately.

Online diagram: #/lesson/ps-sampling?view=visual

### Guided experiment

1. **First-group sample proportion: 0.5** Set the first-group sample proportion to $0.5$ and compare the figure and readouts.

Preset observation: At these parameters: sample-composition mean $15$; population mean $12$; difference $3$.

2. **First-group sample proportion: 0** Set the first-group sample proportion to $0$ and compare the figure and readouts.

Preset observation: At these parameters: sample-composition mean $20$; population mean $12$; difference $8$.

3. **First-group sample proportion: 1** Set the first-group sample proportion to $1$ and compare the figure and readouts.

Preset observation: At these parameters: sample-composition mean $10$; population mean $12$; difference $-2$.

### Worked examples

#### Example 1: Combine strata

Population groups have proportions $0.8,0.2$ and sample group means $10,20$. Estimate the population mean.

- Use population weights.
- $0.8\times10+0.2\times20=12$.

**Answer: $12$.**

#### Example 2: A large but biased sample

Can surveying only regular gym users estimate exercise time across a city?

- The frame excludes many nonusers.
- A larger sample within that list does not restore the omitted people.

**Answer: Not directly generalizable citywide.**

### Common mistakes

- **Random sampling means asking people arbitrarily** Randomness needs a specified probability mechanism.

- **Large samples have no bias** They reduce random variation, not automatically selection bias.

### Exercises and solutions

**1. With group weights $0.5$ each and means $4,8$, what is the weighted mean?**

Hint: Multiply each mean by its weight and add.

Answer: $6$.

- $0.5(4)+0.5(8)=6$.

**2. Does a random sample have the same mean every time?**

Hint: What does random sampling introduce?

Answer: Usually not.

- Different selected units generally give varying statistics.

**3. Does increasing voluntary responses necessarily remove selection bias?**

Hint: Separate sample size from selection method.

Answer: No.

- Response propensity may remain related to the outcome.

**4. If a small stratum is oversampled, should all records simply be averaged?**

Hint: Compare sample and population compositions.

Answer: Generally use weights appropriate to the sampling design.

- The raw mean overweights the small stratum.

Prerequisites: Observational units and variables.

## 1.3 Random sampling and random assignment

*Sampling supports generalization; random assignment supports causal comparisons.*

### The idea

Sampling supports generalization; random assignment supports causal comparisons.

### Intuition

Randomly selecting people and randomly allocating treatments are two randomizations with different jobs.

### Another explanation

It removes systematic allocation while allowing chance imbalance.

### Quick check

What does random assignment primarily address?

A. Confounding in causal comparisons
B. Coverage of the whole population
C. Automatic imputation of missing data

Answer: A. It supports comparability between groups.

### Identify confounding

Preexisting treatment–control differences mix treatment effects with baseline differences in observed outcomes.

### Use random assignment

Random assignment breaks systematic links between treatment allocation and pretreatment factors by design. Finite samples may still be imbalanced.

### State causal boundaries

Causal interpretation also needs well-defined interventions, consistent measurement, and assumptions such as no interference. Population generalization separately needs suitable sampling and context.

### Definition and conditions

Random assignment compares treatments within the same experimental framework.

$$
\hat\tau=\bar Y_{\mathrm{treat}}-\bar Y_{\mathrm{control}}
$$

- Random assignment compares treatments within the same experimental framework.
- Consider attrition, noncompliance, interference, and measurement methods.

### Derivation

Observe an outcome difference between groups.

$$
\bar Y_T-\bar Y_C
$$

Nonrandom group differences may include confounding.

Prespecified random assignment supports a design-based treatment-effect estimate.

$$
\hat\tau=\bar Y_T-\bar Y_C
$$

### Interactive diagram

Can changing group composition alone create a mean difference without a treatment effect?

The confounding example changes composition, not a real randomized treatment effect.

Online diagram: #/lesson/ps-design?view=visual

### Guided experiment

1. **Low-baseline proportion in treatment: 0.3** Set the low-baseline treatment proportion to $0.3$ and compare the figure and readouts.

Preset observation: At these parameters: treatment mean $17$; control mean $12$; difference $5$.

2. **Low-baseline proportion in treatment: 0** Set the low-baseline treatment proportion to $0$ and compare the figure and readouts.

Preset observation: At these parameters: treatment mean $20$; control mean $12$; difference $8$.

3. **Low-baseline proportion in treatment: 1** Set the low-baseline treatment proportion to $1$ and compare the figure and readouts.

Preset observation: At these parameters: treatment mean $10$; control mean $12$; difference $-2$.

### Worked examples

#### Example 1: Compute a difference

Randomized groups have means $14,11$. Estimate the treatment difference.

- Use the prespecified treatment-minus-control direction.
- $14-11=3$; uncertainty analysis is still needed.

**Answer: Point estimate $3$.**

#### Example 2: An observational study

Tutored students score higher. Does that alone show tutoring caused improvement?

- Participants may differ in baseline preparation and family support.
- Those confounders have not been excluded.

**Answer: The association alone does not establish causation.**

### Common mistakes

- **Random assignment guarantees identical groups** It removes systematic allocation while allowing chance imbalance.

- **Correlation establishes causation** A design or additional identification assumptions are needed.

### Exercises and solutions

**1. With means $8,10$, find treatment minus control.**

Hint: Keep the direction consistent.

Answer: $-2$.

- $8-10=-2$.

**2. Does random sampling automatically produce random assignment?**

Hint: The two randomizations act on different decisions.

Answer: No.

- Sampling chooses participants; assignment chooses who receives treatment.

**3. Does unequal sex composition after random assignment prove randomization failed?**

Hint: A probability mechanism does not guarantee exact balance each time.

Answer: No.

- Finite random assignments permit chance imbalances.

**4. Can a randomized trial in a convenience sample be generalized nationally without conditions?**

Hint: Separate causal comparison from external representativeness.

Answer: Not unconditionally.

- Random assignment does not make participants representative nationally.

Prerequisites: Populations, samples, and selection bias.

## 1.4 Frequency plots, histograms, and empirical distributions

*Plots display distributions; first identify what their vertical axes mean.*

### The idea

Plots display distributions; first identify what their vertical axes mean.

### Intuition

Histogram area records frequency. Empirical-distribution steps record the proportion at or below a threshold.

### Another explanation

Continuous-interval probability is area.

### Quick check

In a density histogram, what represents a bin's relative frequency?

A. Height
B. Area
C. Midpoint

Answer: B. Frequency equals height times width.

### Separate categories from numerical bins

Categorical bar width has no probability meaning. Numerical histograms use interval bins; unequal widths make frequency heights misleading for density comparisons.

### Use density heights

Divide a bin's relative frequency by its width. Rectangle area, not height alone, equals relative frequency.

### Read the empirical distribution

The empirical CDF jumps at observations, merging jumps for ties. Rebinning does not change it.

### Definition and conditions

Histogram density heights require positive bin widths.

$$
\hat F_n(x)=\frac1n\sum_{i=1}^{n}\mathbf1\{x_i\le x\},\qquad h_j=\frac{n_j}{n\,w_j}
$$

- Histogram density heights require positive bin widths.
- The empirical CDF counts “at or below” and is right-continuous.

### Derivation

A bin's relative frequency is its count divided by the total.

$$
p_j=n_j/n
$$

Require area equal to relative frequency to determine height.

$$
w_jh_j=p_j
$$

Count observations no greater than the threshold.

$$
\hat F_n(x)=\#\{i:x_i\le x\}/n
$$

### Interactive diagram

Rebin the same data. Which features change and which remain fixed?

Only binning changes; the empirical CDF remains visible.

Online diagram: #/lesson/ps-displays?view=visual

### Guided experiment

1. **Bins: 5** Set the bin count to $5$ and compare the figure and readouts.

Preset observation: At these parameters: sample size $12$; total rectangle area $1$; empirical cumulative proportion $0.416667$.

2. **Bins: 1** Set the bin count to $1$ and compare the figure and readouts.

Preset observation: At these parameters: sample size $12$; total rectangle area $1$; empirical cumulative proportion $0.416667$.

3. **Bins: 8** Set the bin count to $8$ and compare the figure and readouts.

Preset observation: At these parameters: sample size $12$; total rectangle area $1$; empirical cumulative proportion $0.416667$.

### Worked examples

#### Example 1: Unequal bin widths

Two bins each have relative frequency one half and widths $1,2$. What are their density heights?

- First height: $0.5/1=0.5$.
- Second: $0.5/2=0.25$; both areas remain equal.

**Answer: $0.5,0.25$.**

#### Example 2: Read a step

For data $1,2,2,5$, find $\hat F_4(2)$.

- Three observations do not exceed two.
- Divide by four observations.

**Answer: $3/4$.**

### Common mistakes

- **Density height is probability** Continuous-interval probability is area.

- **More bins always give a more objective display** Different widths emphasize different scales; explain the choice.

### Exercises and solutions

**1. For data $1,3,3,4$, what is the empirical CDF at $3$?**

Hint: Include observations equal to the threshold.

Answer: $0.75$.

- Three observations are at or below three.

**2. A bin has width $2$ and relative frequency $0.3$. Find its density height.**

Hint: Area equals frequency.

Answer: $0.15$.

- $0.3/2=0.15$.

**3. Does changing histogram bin width change the raw-data mean?**

Hint: Distinguish display from data.

Answer: No.

- Only the display changes, not the observations.

**4. Can a density height exceed one?**

Hint: Is the constraint on height or area?

Answer: Yes.

- A narrow bin can be tall while total area remains one.

Prerequisites: Observational units and variables.

## 1.5 Mean, median, and spread

*Location describes where data lie; spread describes how dispersed they are.*

### The idea

Location describes where data lie; spread describes how dispersed they are.

### Intuition

The mean is a balance point; the median a middle rank. An extreme value affects them differently.

### Another explanation

Variance has squared units; standard deviation restores the original units.

### Quick check

After multiplying data by $-2$, how does standard deviation change?

A. Multiplied by $-2$
B. Multiplied by $2$
C. Multiplied by $4$

Answer: B. Standard deviation is nonnegative and scales by the absolute factor.

### Choose a location statistic

The mean uses every value; the median depends on sorted position. With skewness or outliers, report the median and interquartile range together.

### Compute sample variance

Sample variance divides squared deviations from the sample mean by the degrees of freedom. Standard deviation has the original data's units.

### Track units

Translation changes location but not spread. Scaling multiplies standard deviation by the absolute factor and variance by its square. This book computes quartiles by splitting about the median, excluding the overall median for odd sample sizes and taking each half's median.

### Definition and conditions

Sample variance requires $n\ge2$. A descriptive population variance may divide by the full count; state the convention.

$$
\bar x=\frac1n\sum_ix_i,\quad s^2=\frac{\sum_i(x_i-\bar x)^2}{n-1},\quad s=\sqrt{s^2}
$$

- Sample variance requires $n\ge2$. A descriptive population variance may divide by the full count; state the convention.
- Unbiasedness requires independent identically distributed observations and a finite second moment; it is proved later.

### Derivation

Deviations from the mean sum to zero.

$$
\sum_i(x_i-\bar x)=0
$$

Square them to prevent sign cancellation.

$$
\mathrm{SS}=\sum_i(x_i-\bar x)^2
$$

Correct one degree of freedom when estimating population variance.

$$
s^2=\mathrm{SS}/(n-1)
$$

### Interactive diagram

Move the last observation. Which is more sensitive: mean, median, or standard deviation?

Other observations stay fixed to show an extreme value's influence; this does not automatically justify deletion.

Online diagram: #/lesson/ps-summaries?view=visual

### Guided experiment

1. **Last observation: 7** Set the last observation to $7$ and compare the figure and readouts.

Preset observation: At these parameters: mean $3.4$; median $3$; sample standard deviation $2.30217$.

2. **Last observation: 4** Set the last observation to $4$ and compare the figure and readouts.

Preset observation: At these parameters: mean $2.8$; median $3$; sample standard deviation $1.30384$.

3. **Last observation: 20** Set the last observation to $20$ and compare the figure and readouts.

Preset observation: At these parameters: mean $6$; median $3$; sample standard deviation $7.90569$.

### Worked examples

#### Example 1: Compute variance

Find the sample standard deviation of $1,2,3$.

- The mean is two; squared deviations sum to two.
- Divide by two to get variance one, then take the square root.

**Answer: $s=1$.**

#### Example 2: Add an extreme value

Change $1,2,3$ to $1,2,30$. Find mean and median.

- The mean is $33/3=11$.
- The middle sorted value stays two.

**Answer: Mean $11$; median $2$.**

### Common mistakes

- **Variance and standard deviation have the same units** Variance has squared units; standard deviation restores the original units.

- **Similar centers imply identical distributions** Also compare spread, shape, and outliers.

### Exercises and solutions

**1. Find the mean of $2,4,6$.**

Hint: Sum and divide by three.

Answer: $4$.

- $12/3=4$.

**2. What happens to sample standard deviation if five is added to every observation?**

Hint: Inspect deviations from the mean.

Answer: Unchanged.

- Every deviation stays unchanged.

**3. What happens to variance if every value is tripled?**

Hint: Track squared deviations.

Answer: Multiplied by $9$.

- Each squared deviation is multiplied by nine.

**4. With sample size one, can sample variance use denominator $n-1$?**

Hint: Check the denominator.

Answer: No.

- Degrees of freedom are zero.

Prerequisites: Frequency plots, histograms, and empirical distributions.

## Chapter review

Try independently before reading the solutions.

**1. Two regions contain $0.7,0.3$ of the population and have means $20,40$. Find the population's weighted mean. Why is it not simply thirty?**

Hint: The number of samples or groups does not determine their population weights.

Answer: $26$; a simple average uses the wrong population composition.

- $0.7(20)+0.3(40)=26$.
- A simple average implicitly gives each region half the population weight.

**2. Volunteers are randomly assigned to treatment and control groups. What conclusions does this support, and what does it not guarantee?**

Hint: Distinguish recruitment from treatment assignment.

Answer: It supports treatment comparisons within the experimental setting, without automatically justifying generalization to the population.

- Under the stated experimental conditions, random assignment supports a causal comparison within the sample.
- Voluntary participation does not automatically make the sample representative of the target population.

# Chapter 2 · Events and Probability

Use sample spaces, counting, and conditional probability to distinguish relationships between events.

Goals:
- Calculate event probabilities
- Choose a counting method
- Assess independence and conditional probabilities

## 2.1 Sample spaces and events

*List the possible outcomes, then specify which belong to each event.*

### The idea

List the possible outcomes, then specify which belong to each event.

### Intuition

An outcome is one particular result; an event is a set of results meeting a condition.

### Another explanation

Equal likelihood is a model assumption needing justification.

### Quick check

Must three distinct recorded values each have probability one third?

A. Always
B. Only the maximum is different
C. Not necessarily

Answer: C. A recording rule may merge different numbers of elementary outcomes.

### Describe the sample space

Two coin tosses can be recorded as ordered strings. Recording only head count gives a different sample space whose outcomes need not be equally likely.

### Combine events

Intersection means both occur, union at least one, and complement nonoccurrence. Set diagrams help avoid counting twice.

### Check equal likelihood

Probability is favorable count divided by total count only in a finite equally likely space.

### Definition and conditions

The sample space must cover every possible outcome of the question.

$$
P(A)=\frac{|A|}{|\Omega|}\quad\text{only for finite equally likely outcomes}
$$

- The sample space must cover every possible outcome of the question.
- The counting formula requires equally likely elementary outcomes.

### Derivation

List mutually exclusive elementary outcomes.

$$
\Omega=\{HH,HT,TH,TT\}
$$

The event of at least one head contains three outcomes.

$$
A=\{HH,HT,TH\}
$$

Add their probabilities under fair independent tosses.

$$
P(A)=3/4
$$

### Interactive diagram

Change the event cells. How do unions, intersections, and complements change?

The illustration has ten equally likely elementary outcomes; cell-count probabilities apply within that model only.

Online diagram: #/lesson/ps-events?view=visual

### Guided experiment

1. **Event B starting position: 4** Set event B's starting position to $4$ and compare the figure and readouts.

Preset observation: At these parameters: A probability $0.6$; B probability $0.5$; intersection $0.2$; union $0.9$.

2. **Event B starting position: 0** Set event B's starting position to $0$ and compare the figure and readouts.

Preset observation: At these parameters: A probability $0.6$; B probability $0.5$; intersection $0.5$; union $0.6$.

3. **Event B starting position: 9** Set event B's starting position to $9$ and compare the figure and readouts.

Preset observation: At these parameters: A probability $0.6$; B probability $0.5$; intersection $0.4$; union $0.7$.

### Worked examples

#### Example 1: Two tosses

What is the probability of exactly one head in two independent fair tosses?

- The four ordered outcomes are equally likely.
- Two are favorable.

**Answer: $1/2$.**

#### Example 2: Compressed records

Are head counts $0,1,2$ equally likely?

- They represent one, two, and one elementary outcomes respectively.
- Their probabilities are $1/4,1/2,1/4$.

**Answer: Not equally likely.**

### Common mistakes

- **Finite outcomes are necessarily equally likely** Equal likelihood is a model assumption needing justification.

- **Events and outcomes are identical** An event may contain many elementary outcomes.

### Exercises and solutions

**1. What is the probability of an even face on a fair die?**

Hint: List even faces.

Answer: $1/2$.

- Three favorable outcomes out of six.

**2. Can event $A$ and its complement occur together?**

Hint: Use the complement definition.

Answer: No.

- They share no outcomes.

**3. What is the probability of at least one tail in two independent fair tosses?**

Hint: Complement the all-heads event.

Answer: $3/4$.

- $1-1/4=3/4$.

**4. Does recording only “win” and “lose” imply a one-half winning probability?**

Hint: Are those categories equally likely?

Answer: No.

- Two categories alone specify no probabilities.

Prerequisites: Observational units and variables.

## 2.2 Probability axioms and the addition rule

*To find the probability that at least one event occurs, subtract their double-counted overlap.*

### The idea

To find the probability that at least one event occurs, subtract their double-counted overlap.

### Intuition

Counting each of two sets once counts the intersection twice.

### Another explanation

Whether the overlap vanishes depends on disjointness.

### Quick check

When does simply adding two probabilities give their union probability?

A. When independent
B. When mutually exclusive
C. When identical

Answer: B. There must be no double-counted intersection.

### Apply the axioms

Probabilities are nonnegative, the whole space has probability one, and a countable union of mutually exclusive events has the sum of their probabilities.

### Derive complement and union rules

Partitioning the space into an event and its complement gives the complement rule. A general union must also subtract the intersection.

### Check disjointness

Mutually exclusive means events cannot occur together. Independent means learning one does not change the other's probability. These differ.

### Definition and conditions

Both events belong to the same probability model.

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B),\qquad P(A^c)=1-P(A)
$$

- Both events belong to the same probability model.
- Mutually exclusive events have zero intersection probability.

### Derivation

Split an event into intersection and difference regions.

$$
A=(A\setminus B)\cup(A\cap B)
$$

Add the three disjoint regions.

$$
P(A\cup B)=P(A\setminus B)+P(A\cap B)+P(B\setminus A)
$$

Substitute each event's probability.

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B)
$$

### Interactive diagram

Change the overlap. How much does direct addition overcount?

The sets distinguish overlap from union probability. Controls must respect probability constraints.

Online diagram: #/lesson/ps-probability-rules?view=visual

### Guided experiment

1. **Event B starting position: 4** Set event B's starting position to $4$ and compare the figure and readouts.

Preset observation: At these parameters: A probability $0.6$; B probability $0.5$; intersection $0.2$; union $0.9$.

2. **Event B starting position: 0** Set event B's starting position to $0$ and compare the figure and readouts.

Preset observation: At these parameters: A probability $0.6$; B probability $0.5$; intersection $0.5$; union $0.6$.

3. **Event B starting position: 9** Set event B's starting position to $9$ and compare the figure and readouts.

Preset observation: At these parameters: A probability $0.6$; B probability $0.5$; intersection $0.4$; union $0.7$.

### Worked examples

#### Example 1: One inclusion–exclusion step

Given $P(A)=0.6,P(B)=0.5,P(A\cap B)=0.3$, find the union probability.

- The initial sum is $1.1$.
- Subtract the repeated $0.3$.

**Answer: $0.8$.**

#### Example 2: At least one success

Two independent trials each succeed with probability $0.2$. Find the probability of at least one success.

- Both fail with probability $0.8^2=0.64$.
- Take the complement.

**Answer: $0.36$.**

### Common mistakes

- **Independence permits direct addition** Whether the overlap vanishes depends on disjointness.

- **At least one occurrence always needs exhaustive enumeration** Often compute the complement of no occurrence.

### Exercises and solutions

**1. If $P(A)=0.7$, find the complement probability.**

Hint: They sum to one.

Answer: $0.3$.

- $1-0.7=0.3$.

**2. Disjoint events have probabilities $0.2,0.4$. Find their union probability.**

Hint: The intersection is zero.

Answer: $0.6$.

- $0.2+0.4=0.6$.

**3. Events have probabilities $0.8,0.7$. How small can their intersection be?**

Hint: The union cannot exceed one.

Answer: At least $0.5$.

- $0.8+0.7-P(A\cap B)\le1$.

**4. Can an event have probability $1.2$?**

Hint: Compare it with the whole space.

Answer: No.

- An event lies within the whole space, so its probability is at most one.

Prerequisites: Sample spaces and events.

## 2.3 The product rule, permutations, and combinations

*First decide whether order matters, then choose the counting method.*

### The idea

First decide whether order matters, then choose the counting method.

### Intuition

Seating three people and selecting two from three are different questions.

### Another explanation

First determine whether roles or order are recorded.

### Quick check

When choosing three of five people, does reordering the group create a new combination?

A. No
B. Yes
C. It depends on name length

Answer: A. A combination records a set, not an ordering.

### Choose in stages

Multiply stage counts when they correctly account for restrictions imposed by earlier choices. Allowing repetition and forbidding it give different counts.

### Identify whether order matters

Ordered selections without repetition use permutations. If order is irrelevant, each group has been counted once for every internal ordering.

### Connect counts to probability

Count ratios give probability only for equally likely outcomes. A familiar formula does not excuse ignoring the sampling mechanism.

### Definition and conditions

Integers satisfy $0\le k\le n$; selection here is without repetition.

$$
{n\choose k}=\frac{n!}{k!(n-k)!},\qquad P(n,k)=\frac{n!}{(n-k)!}
$$

- Integers satisfy $0\le k\le n$; selection here is without repetition.
- If repetition is allowed, build the model for that task separately.

### Derivation

Ordered sampling has successively fewer options.

$$
n(n-1)\cdots(n-k+1)
$$

Each unordered group corresponds to all its internal orders.

$$
k!
$$

Remove that duplication.

$$
{n\choose k}=P(n,k)/k!
$$

### Interactive diagram

With the population fixed, vary the selected count. By what factor do permutations exceed combinations?

The ratio is the selection count's factorial. The illustration avoids overflowing enormous integers.

Online diagram: #/lesson/ps-counting?view=visual

### Guided experiment

1. **Selected people: 3** Set the selection count to $3$ and compare the figure and readouts.

Preset observation: At these parameters: selected from eight $3$; combinations $56$; permutations $336$; internal ordering factor $6$.

2. **Selected people: 1** Set the selection count to $1$ and compare the figure and readouts.

Preset observation: At these parameters: selected from eight $1$; combinations $8$; permutations $8$; internal ordering factor $1$.

3. **Selected people: 8** Set the selection count to $8$ and compare the figure and readouts.

Preset observation: At these parameters: selected from eight $8$; combinations $1$; permutations $40320$; internal ordering factor $40320$.

### Worked examples

#### Example 1: Select representatives

Choose two interchangeable representatives from five people. How many ways?

- Ordered selection first gives twenty.
- Each pair was counted twice.

**Answer: $10$ ways.**

#### Example 2: A numeric password

A four-digit password uses any of ten digits at each position, with repetition. How many passwords?

- Each position has ten choices.
- Leading zero is permitted.

**Answer: $10^4=10000$ ways.**

### Common mistakes

- **Every people-selection problem uses permutations** First determine whether roles or order are recorded.

- **Distinct outcomes are naturally equally likely** The selection mechanism must support that assumption.

### Exercises and solutions

**1. How many two-person groups can be chosen from four people?**

Hint: Ignore order.

Answer: $6$.

- $\binom42=6$.

**2. Choose a president and vice president from four people. How many ways?**

Hint: The roles are distinct.

Answer: $12$.

- $4\times3=12$.

**3. Uniformly select two of six distinct cards. What is the probability of including a specified card?**

Hint: Fix that card, then choose its partner.

Answer: $1/3$.

- $5/\binom62=1/3$.

**4. Does the combination formula directly count ordered independent draws with replacement?**

Hint: Check repetition and order.

Answer: Not directly.

- Both differ from that formula's assumptions.

Prerequisites: Sample spaces and events.

## 2.4 Conditional probability and the multiplication rule

*Given an event has occurred, renormalize probability within its remaining outcomes.*

### The idea

Given an event has occurred, renormalize probability within its remaining outcomes.

### Intuition

The denominator changes from the full population to the group satisfying the condition.

### Another explanation

Divide by the conditioning probability too.

### Quick check

Given $B$, what is the denominator?

A. $P(A)$
B. $P(B)$
C. $P(A\cap B)$

Answer: B. The conditioning event defines the new total.

### Identify the conditioning event

Once $B$ is known, retain only outcomes in $B$. The original intersection is the target event in this restricted space.

### Renormalize

Divide intersection probability by conditioning probability, which must be positive. Zero-probability conditioning needs a different definition.

### Multiply along a path

First reach a branch, then the target within that branch. Path probability multiplies the two probabilities.

### Definition and conditions

The conditioning event satisfies $P(B)>0$.

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad P(A\cap B)=P(B)P(A\mid B)
$$

- The conditioning event satisfies $P(B)>0$.
- The direction of conditioning cannot be freely reversed.

### Derivation

Retain the conditioning event.

$$
\Omega_{\mathrm{new}}=B
$$

The intersection still marks target outcomes.

$$
A_{\mathrm{new}}=A\cap B
$$

Divide by the restricted space's total probability.

$$
P(A\mid B)=P(A\cap B)/P(B)
$$

### Interactive diagram

With the intersection fixed, how does changing the conditioning group's size affect conditional probability?

Ten equally likely outcomes illustrate renormalization; zero-probability conditioning is excluded.

Online diagram: #/lesson/ps-conditional?view=visual

### Guided experiment

1. **Conditioning-event starting position: 4** Set the conditioning-event starting position to $4$ and compare the figure and readouts.

Preset observation: At these parameters: A probability $0.6$; B probability $0.5$; intersection $0.2$; A given B $0.4$.

2. **Conditioning-event starting position: 0** Set the conditioning-event starting position to $0$ and compare the figure and readouts.

Preset observation: At these parameters: A probability $0.6$; B probability $0.5$; intersection $0.5$; A given B $1$.

3. **Conditioning-event starting position: 9** Set the conditioning-event starting position to $9$ and compare the figure and readouts.

Preset observation: At these parameters: A probability $0.6$; B probability $0.5$; intersection $0.4$; A given B $0.8$.

### Worked examples

#### Example 1: Change the denominator

Of one hundred people, forty commute and ten of those cycle. Given commuting, what proportion cycle?

- The conditional group has forty people.
- Ten are targets.

**Answer: $10/40=1/4$.**

#### Example 2: Path probability

If $P(B)=0.3,P(A\mid B)=0.8$, find the intersection probability.

- First reach the conditioning event.
- Multiply $0.3\times0.8$.

**Answer: $0.24$.**

### Common mistakes

- **Conditional probability is just intersection probability** Divide by the conditioning probability too.

- **Conditioning can be reversed freely** Reversal changes the reference group.

### Exercises and solutions

**1. Given $P(B)=0.4,P(A\cap B)=0.1$, find the conditional probability.**

Hint: Divide by the conditioning probability.

Answer: $0.25$.

- $0.1/0.4=0.25$.

**2. Given $P(A)=0.5,P(B\mid A)=0.2$, find the intersection.**

Hint: Use conditional multiplication.

Answer: $0.1$.

- $0.5(0.2)=0.1$.

**3. Given an even fair-die result, what is the chance it is six?**

Hint: The restricted space has three equally likely outcomes.

Answer: $1/3$.

- Six is one of them.

**4. May $P(A\mid B)$ simply be replaced by $P(B\mid A)$?**

Hint: Their denominators generally differ.

Answer: No.

- They share a numerator, not generally a denominator.

Prerequisites: Probability axioms and the addition rule.

## 2.5 Independence, disjointness, and repeated trials

*Independence means learning one event does not change the probability of another.*

### The idea

Independence means learning one event does not change the probability of another.

### Intuition

Disjoint events exclude each other. Independent positive-probability events therefore cannot be disjoint.

### Another explanation

Higher-order intersections also matter.

### Quick check

For disjoint positive-probability events, what happens to one probability after learning the other occurred?

A. It becomes zero
B. It is unchanged
C. It becomes one

Answer: A. They are therefore not independent.

### Test two-event independence

Check whether intersection probability equals the product of marginals. With positive conditioning probability, this is equivalent to unchanged conditional probability.

### Distinguish pairwise and mutual independence

For three or more events, mutual independence requires the product rule for every subcollection. Pairwise checks alone are insufficient.

### Check repeated-trial assumptions

Later binomial conclusions depend on independent trials. Replacement and adequate mixing can support the model; sampling without replacement usually creates dependence.

### Definition and conditions

Event independence is a property of the joint model.

$$
A\perp B\iff P(A\cap B)=P(A)P(B)
$$

- Event independence is a property of the joint model.
- Mutual independence requires the product relation for every finite subcollection.

### Derivation

Under independence, conditional probability is unchanged.

$$
P(A\mid B)=P(A)
$$

Combine this with conditional multiplication.

$$
P(A\cap B)=P(B)P(A)
$$

Positive-probability disjoint events instead have zero intersection.

$$
P(A)P(B)>0\ne P(A\cap B)=0
$$

### Interactive diagram

In an independent model, change one event's probability. Does conditioning on it change the other event's probability?

Joint and conditional probabilities are displayed. Independence is built into the model, not inferred from finite samples.

Online diagram: #/lesson/ps-independence?view=visual

### Guided experiment

1. **Event A probability: 0.4** Set event A's probability to $0.4$ and compare the figure and readouts.

Preset observation: At these parameters: first-row marginal $0.4$; first-column marginal $0.5$; upper-left joint probability $0.2$; first column given first row $0.5$.

2. **Event A probability: 0.05** Set event A's probability to $0.05$ and compare the figure and readouts.

Preset observation: At these parameters: first-row marginal $0.05$; first-column marginal $0.5$; upper-left joint probability $0.025$; first column given first row $0.5$.

3. **Event A probability: 0.95** Set event A's probability to $0.95$ and compare the figure and readouts.

Preset observation: At these parameters: first-row marginal $0.95$; first-column marginal $0.5$; upper-left joint probability $0.475$; first column given first row $0.5$.

### Worked examples

#### Example 1: Test independence

If $P(A)=0.4,P(B)=0.5,P(A\cap B)=0.2$, are the events independent?

- The marginal product is $0.2$.
- It matches the intersection.

**Answer: Independent.**

#### Example 2: Pairwise is insufficient

For two independent fair tosses, consider first head, second head, and matching tosses. Are all three mutually independent?

- Each has probability one half and each pair intersection one quarter.
- The triple intersection is all heads, with probability one quarter rather than one eighth.

**Answer: Pairwise independent, but not mutually independent.**

### Common mistakes

- **Pairwise independence is mutual independence** Higher-order intersections also matter.

- **Sampling without replacement is independent repetition** Each draw changes the remaining composition.

### Exercises and solutions

**1. Independent events have probabilities $0.2,0.3$. Find the intersection probability.**

Hint: Multiply.

Answer: $0.06$.

- $0.2\times0.3=0.06$.

**2. Are two disjoint positive-probability events independent?**

Hint: Compare zero intersection with a positive product.

Answer: Not independent.

- They differ.

**3. Two independent trials each succeed with probability one half. Find exactly one success probability.**

Hint: There are two paths.

Answer: $1/2$.

- $2(1/2)^2=1/2$.

**4. Do the three pairwise checks suffice for three-event mutual independence?**

Hint: Which intersection remains?

Answer: No.

- The triple intersection must also be checked.

Prerequisites: Conditional probability and the multiplication rule.

## Chapter review

Try independently before reading the solutions.

**1. Two events have probabilities $0.5,0.4$ and intersection probability $0.2$. Find their union probability and $P(A\mid B)$, and determine whether they are independent.**

Hint: Apply the addition rule, conditional probability, and the product criterion separately.

Answer: Union probability $0.7$; conditional probability $0.5$; the events are independent.

- The union probability is $0.5+0.4-0.2=0.7$.
- The conditional probability is $0.2/0.4=0.5$, and the intersection equals the product of the marginal probabilities.

**2. Choose three representatives from eight people, with no distinct roles, then appoint one representative as spokesperson. How many outcomes are possible?**

Hint: Choose the group, then assign the role.

Answer: $168$ outcomes.

- There are $\binom83=56$ representative groups.
- Each group has three possible spokespersons.

# Chapter 3 · Random Variables and Average Behavior

A distribution describes possible outcomes; expectation and variance describe their center and spread.

Goals:
- Update information using Bayes' rule
- Read cumulative distribution functions
- Calculate expectation, variance, and probability bounds

## 3.1 Total probability and Bayes' rule

*Combine probabilities from all sources, then use the observation to update the source probabilities.*

### The idea

Combine probabilities from all sources, then use the observation to update the source probabilities.

### Intuition

Positive results include true positives and false positives from a potentially much larger non-target group.

### Another explanation

The conditioning direction is reversed; combine prior and false-positive rate.

### Quick check

What belongs in Bayes' denominator?

A. Only the target source
B. Every source producing the observation
C. Only the false-positive source

Answer: B. It is the observation's total probability.

### Separate sources

Partition the population into disjoint exhaustive groups and compute each source-and-observation path probability.

### Find the observation's total probability

Total probability adds paths from every source, not only the intuitively appealing branch.

### Calculate the posterior

Bayes divides the target-source path by all paths producing the observation. With a low prior, even a modest false-positive rate matters.

### Definition and conditions

Source events form a disjoint exhaustive partition, and the observation satisfies $P(D)>0$.

$$
P(H_i\mid D)=\frac{P(H_i)P(D\mid H_i)}{\sum_jP(H_j)P(D\mid H_j)}
$$

- Source events form a disjoint exhaustive partition, and the observation satisfies $P(D)>0$.
- Posteriors depend on base rates and the model's conditional probabilities.

### Derivation

Partition the observation by source.

$$
D=\bigcup_j(D\cap H_j)
$$

Add the disjoint paths.

$$
P(D)=\sum_jP(H_j)P(D\mid H_j)
$$

Divide by observation probability.

$$
P(H_i\mid D)=P(H_i\cap D)/P(D)
$$

### Interactive diagram

Keep detection fixed and lower the base rate. How does target probability among positives change?

A proportion tree and population grid show true positives, false positives, and posterior in an abstract detection model.

Online diagram: #/lesson/ps-bayes?view=visual

### Guided experiment

1. **Target base rate: 0.01** Set the target base rate to $0.01$ and compare the figure and readouts.

Preset observation: At these parameters: true-positive path $0.009$; false-positive path $0.099$; total positive probability $0.108$; target given positive $0.0833333$.

2. **Target base rate: 0.001** Set the target base rate to $0.001$ and compare the figure and readouts.

Preset observation: At these parameters: true-positive path $0.0009$; false-positive path $0.0999$; total positive probability $0.1008$; target given positive $0.00892857$.

3. **Target base rate: 0.5** Set the target base rate to $0.5$ and compare the figure and readouts.

Preset observation: At these parameters: true-positive path $0.45$; false-positive path $0.05$; total positive probability $0.5$; target given positive $0.9$.

### Worked examples

#### Example 1: A low base rate

Target prevalence is $0.01$, detection rate $0.9$, and false-positive rate $0.1$. Find target probability after a positive.

- True-positive path $0.009$; false-positive path $0.099$.
- Divide by all positives, $0.108$.

**Answer: $1/12\approx0.0833$.**

#### Example 2: Mixed sources

Factory one supplies sixty percent with defect rate $0.02$; factory two supplies forty percent with rate $0.05$. Find total defect probability.

- First path: $0.6(0.02)=0.012$.
- Second path: $0.4(0.05)=0.02$.

**Answer: $0.032$.**

### Common mistakes

- **Detection rate is target probability after a positive** The conditioning direction is reversed; combine prior and false-positive rate.

- **The prior may be omitted** Ignoring source proportions generally changes the posterior.

### Exercises and solutions

**1. Factory one supplies sixty percent with defect rate $0.02$; factory two supplies forty percent with rate $0.05$. Given a defect, what is the probability of factory two?**

Hint: Use that source's defect path as numerator.

Answer: $0.625$.

- $0.02/0.032=0.625$.

**2. Two equally likely sources have observation likelihoods $0.8,0.2$. Find the first source's posterior.**

Hint: Compute its numerator and total observation probability.

Answer: $0.8$.

- $0.4/(0.4+0.1)=0.8$.

**3. Does high sensitivity guarantee near certainty after a positive result?**

Hint: Base rate and false-positive rate are still missing.

Answer: No.

- A low-prevalence population may contribute many false positives.

**4. If the observation has equal likelihood under both sources, does it change source probabilities?**

Hint: The common factor cancels.

Answer: No.

- Posterior equals prior.

Prerequisites: Conditional probability and the multiplication rule, Independence, disjointness, and repeated trials.

## 3.2 Random variables, mass functions, and CDFs

*A random variable assigns a number to each outcome; its distribution describes those numbers' probabilities.*

### The idea

A random variable assigns a number to each outcome; its distribution describes those numbers' probabilities.

### Intuition

The same experiment may record total score or a threshold indicator. These are different random variables.

### Another explanation

Discrete distributions jump, and mixed distributions may too.

### Quick check

What does a CDF jump represent?

A. Probability at that point
B. The point's value
C. The mean

Answer: A. It is the probability mass at exactly that point.

### Map outcomes to numbers

A random variable maps the sample space to the reals. A discrete mass function assigns nonnegative probabilities to possible values, summing to one.

### Accumulate to a threshold

A CDF gives the probability at or below a threshold. It is nondecreasing and right-continuous, with limits zero and one at the two infinities.

### Subtract for intervals

CDF differences naturally describe intervals open on the left and closed on the right. Including a discrete endpoint can change the answer.

### Definition and conditions

The CDF definition covers discrete, continuous, and mixed distributions.

$$
F_X(x)=P(X\le x),\quad P(a<X\le b)=F_X(b)-F_X(a)
$$

- The CDF definition covers discrete, continuous, and mixed distributions.
- Discrete mass is $P(X=x)=F_X(x)-F_X(x^-)$.

### Derivation

Partition the threshold event by possible values.

$$
F_X(x)=\sum_{k\le x}p(k)\quad\text{in the discrete case}
$$

The interval event is the difference of nested events.

$$
\{X\le b\}\setminus\{X\le a\}=\{a<X\le b\}
$$

Subtract to get its probability.

$$
P(a<X\le b)=F_X(b)-F_X(a)
$$

### Interactive diagram

Move the threshold. How do the mass plot and cumulative steps correspond?

The discrete distribution is fixed; the display highlights mass up to the threshold and its CDF value.

Online diagram: #/lesson/ps-cdf?view=visual

### Guided experiment

1. **Value threshold: 1** Set the threshold to $1$ and compare the figure and readouts.

Preset observation: At these parameters: threshold $1$; cumulative probability $0.7$.

2. **Value threshold: -0.5** Set the threshold to $-0.5$ and compare the figure and readouts.

Preset observation: At these parameters: threshold $-0.5$; cumulative probability $0$.

3. **Value threshold: 2.5** Set the threshold to $2.5$ and compare the figure and readouts.

Preset observation: At these parameters: threshold $2.5$; cumulative probability $1$.

### Worked examples

#### Example 1: Discrete accumulation

Masses $P(X=0,1,2)$ are respectively $0.2,0.5,0.3$. Find $F_X(1)$.

- Add masses at zero and one.
- $0.2+0.5=0.7$.

**Answer: $0.7$.**

#### Example 2: Endpoints matter

In that distribution, find $P(1<X\le2)$ and $P(1\le X\le2)$.

- The first contains only two, giving $0.3$.
- The second also includes mass $0.5$ at one.

**Answer: Respectively $0.3,0.8$.**

### Common mistakes

- **Every CDF is smooth** Discrete distributions jump, and mixed distributions may too.

- **All interval endpoints are irrelevant** A singleton is irrelevant only when it carries no mass.

### Exercises and solutions

**1. $X$ has masses $0.2,0.5,0.3$ at $0,1,2$. Find $F_X(-1)$.**

Hint: The threshold is below every support point.

Answer: $0$.

- No value enters the event.

**2. $X$ has masses $0.2,0.5,0.3$ at $0,1,2$. Find $P(X=1)$.**

Hint: Read the jump.

Answer: $0.5$.

- $0.7-0.2=0.5$.

**3. May a CDF jump downward?**

Hint: How does the event change as the threshold grows?

Answer: No.

- It can only include more outcomes.

**4. Can every distribution be recovered entirely by ordinary differentiation of its CDF?**

Hint: Where is discrete mass recorded?

Answer: No.

- Jump mass cannot be represented by an ordinary density derivative.

Prerequisites: Sample spaces and events.

## 3.3 Expectation and linearity

*Expectation is a probability-weighted average, not the most frequent outcome.*

### The idea

Expectation is a probability-weighted average, not the most frequent outcome.

### Intuition

The expected value need never occur; a fair die's expectation is not a die face.

### Another explanation

A weighted average may lie outside the support.

### Quick check

Does linearity of expectation require independence?

A. Yes
B. No, but the relevant expectations must exist
C. Only valid for fair dice

Answer: B. Integrability suffices; independence is not required.

### Weight by probabilities

For discrete expectation, multiply each value by its probability and sum. A function of the random variable can be evaluated before taking expectation.

### Apply linearity

Expectation of a sum is the sum of expectations, without independence. A constant has its own value as expectation.

### Check integrability

If positive and negative contributions both diverge, cancellation does not define expectation. Linear combinations here assume absolute integrability.

### Definition and conditions

This lesson assumes $E|X|,E|Y|<\infty$.

$$
E[X]=\sum_xxp(x),\qquad E[aX+bY+c]=aE[X]+bE[Y]+c
$$

- This lesson assumes $E|X|,E|Y|<\infty$.
- Generally $E[g(X)]=g(E[X])$ does not hold.

### Derivation

Group outcomes by random-variable value.

$$
E[X]=\sum_xxP(X=x)
$$

Expand the finite sum termwise.

$$
E[aX+bY]=\sum_{x,y}(ax+by)p(x,y)
$$

Separate contributions and sum marginals.

$$
E[aX+bY]=aE[X]+bE[Y]
$$

### Interactive diagram

Move one value. How does the probability-weighted balance point change?

Fixed probabilities show mass, expectation, and the distinction from the expected square.

Online diagram: #/lesson/ps-expectation?view=visual

### Guided experiment

1. **Second value: 4** Set the second value to $4$ and compare the figure and readouts.

Preset observation: At these parameters: expectation $3$; second moment $12$; variance $3$; standard deviation $1.73205$.

2. **Second value: -3** Set the second value to $-3$ and compare the figure and readouts.

Preset observation: At these parameters: expectation $-2.25$; second moment $6.75$; variance $1.6875$; standard deviation $1.29904$.

3. **Second value: 8** Set the second value to $8$ and compare the figure and readouts.

Preset observation: At these parameters: expectation $6$; second moment $48$; variance $12$; standard deviation $3.4641$.

### Worked examples

#### Example 1: The die's average

What is the expectation of a fair six-sided die?

- Each face has probability one sixth.
- Face values sum to twenty-one.

**Answer: $21/6=3.5$.**

#### Example 2: Transformations do not commute

$X$ is equally likely $-1,1$. Compare $E[X^2]$ and $(E[X])^2$.

- The mean is zero, whose square is zero.
- Every squared value is one, giving expected square one.

**Answer: Respectively $1,0$.**

### Common mistakes

- **An expectation must be attainable** A weighted average may lie outside the support.

- **A nonlinear function can be moved outside expectation** Only special cases allow this; verify separately.

### Exercises and solutions

**1. $X$ equals ten with probability $0.3$, otherwise zero. Find its expectation.**

Hint: Weight by probability.

Answer: $3$.

- $10(0.3)=3$.

**2. If $E[X]=2$, find $E[3X+1]$.**

Hint: Use linearity.

Answer: $7$.

- $3(2)+1=7$.

**3. May expectation lie outside the support?**

Hint: Consider the die.

Answer: Yes.

- Its expectation $3.5$ is not an attainable face.

**4. Does the expectation of a sum of correlated variables need covariance?**

Hint: Distinguish expectation from variance.

Answer: No.

- Linearity requires no independence.

Prerequisites: Random variables, mass functions, and CDFs.

## 3.4 Variance, standard deviation, and covariance terms

*Variance measures expected squared fluctuation around the mean.*

### The idea

Variance measures expected squared fluctuation around the mean.

### Intuition

Two variables can share a mean while one barely changes and the other fluctuates widely.

### Another explanation

They add directly only with zero covariance.

### Quick check

What happens to variance after adding a constant?

A. Add that constant
B. No change
C. Multiply by the constant squared

Answer: B. Values and mean shift together, leaving deviations unchanged.

### Compute squared deviations

Variance is the expectation of squared deviation, not expected deviation, which is zero.

### Use the shortcut formula

Expand the square to obtain second moment minus squared mean. Thus the mean alone cannot determine variance.

### Keep cross terms in sums

Covariance terms generally remain. Independence with finite second moments makes them zero; constant scaling multiplies variance by the factor's square.

### Definition and conditions

Finite second moments are required.

$$
\operatorname{Var}(X)=E[X^2]-(EX)^2,\quad\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)
$$

- Finite second moments are required.
- Independent variances add; correlated variables generally retain cross terms.

### Derivation

Expand the square.

$$
(X-\mu)^2=X^2-2\mu X+\mu^2
$$

Take expectation using $EX=\mu$.

$$
E[(X-\mu)^2]=E[X^2]-2\mu^2+\mu^2
$$

Translation cancels; squared scaling remains.

$$
\operatorname{Var}(aX+b)=E[a^2(X-EX)^2]
$$

### Interactive diagram

Keep the center fixed and separate two values. How do variance and standard deviation change?

The two-point model shows deviations, squared deviations, and expectation; graphical distance is not a variance unit.

Online diagram: #/lesson/ps-variance?view=visual

### Guided experiment

1. **Distance from center: 1** Set the distance from center to $1$ and compare the figure and readouts.

Preset observation: At these parameters: expectation $0$; second moment $1$; variance $1$; standard deviation $1$.

2. **Distance from center: 0.1** Set the distance from center to $0.1$ and compare the figure and readouts.

Preset observation: At these parameters: expectation $0$; second moment $0.01$; variance $0.01$; standard deviation $0.1$.

3. **Distance from center: 4** Set the distance from center to $4$ and compare the figure and readouts.

Preset observation: At these parameters: expectation $0$; second moment $16$; variance $16$; standard deviation $4$.

### Worked examples

#### Example 1: Two-point variation

$X$ is equally likely zero or two. Find the variance.

- Mean one, second moment two.
- Variance $2-1=1$.

**Answer: $1$.**

#### Example 2: Adding a variable to itself

If $\operatorname{Var}(X)=3$, why is $\operatorname{Var}(X+X)$ not six?

- These are the same variable, not independent copies.
- It equals $\operatorname{Var}(2X)=4(3)$.

**Answer: $12$.**

### Common mistakes

- **Two variances always add directly** They add directly only with zero covariance.

- **Variance equals standard deviation** Standard deviation is variance's nonnegative square root.

### Exercises and solutions

**1. $X$ is constantly five. Find its variance.**

Hint: There is no fluctuation.

Answer: $0$.

- Every squared deviation is zero.

**2. If $\operatorname{Var}(X)=4$, find $\operatorname{Var}(3X+2)$.**

Hint: Square the multiplier.

Answer: $36$.

- $9(4)=36$.

**3. Independent variables have variances two and five. Find their sum's variance.**

Hint: The cross term vanishes.

Answer: $7$.

- $2+5=7$.

**4. Can standard deviation be negative?**

Hint: It is the square root of variance.

Answer: No.

- Take the nonnegative root.

Prerequisites: Expectation and linearity.

## 3.5 Markov and Chebyshev probability bounds

*A little distributional information can bound tail probabilities without the full distribution.*

### The idea

A little distributional information can bound tail probabilities without the full distribution.

### Intuition

A bound says “at most,” not an exact probability, and need not be tight.

### Another explanation

Only special distributions and thresholds attain it.

### Quick check

Is Chebyshev an exact tail probability?

A. Yes
B. It is the normal probability
C. No; it is a universal upper bound

Answer: C. It does not specify distribution shape, so is often loose.

### Use nonnegativity

Above a positive threshold, a nonnegative variable contributes at least that threshold each time. Its mean limits the probability of those contributions.

### Square deviations to obtain a nonnegative variable

Apply Markov to squared deviation for Chebyshev's bound, requiring a mean and finite variance.

### Recognize loose bounds

Replace a probability bound above one by one. For a specified distribution, exact probabilities are often smaller than these general bounds.

### Definition and conditions

Markov requires $a>0$, a nonnegative variable, and finite expectation.

$$
P(X\ge a)\le\frac{EX}{a}\ (X\ge0),\qquad P(|X-\mu|\ge k\sigma)\le\frac1{k^2}
$$

- Markov requires $a>0$, a nonnegative variable, and finite expectation.
- The standard-deviation form of Chebyshev needs $k>0$ and finite positive variance. At variance zero, the variable equals its mean almost surely and must be handled separately.

### Derivation

Bound the variable below by the threshold on its tail event.

$$
X\ge a\mathbf1\{X\ge a\}
$$

Take expectations and rearrange.

$$
P(X\ge a)\le EX/a
$$

Apply this to squared deviation at the squared threshold.

$$
P((X-\mu)^2\ge k^2\sigma^2)\le1/k^2
$$

### Interactive diagram

Compare the normal tail with the universal bound. Which is tighter?

The curve gives a specific normal tail area, alongside a bound using variance alone.

Online diagram: #/lesson/ps-inequalities?view=visual

### Guided experiment

1. **Standard-deviation multiple: 2** Set the multiple to $2$ and compare the figure and readouts.

Preset observation: At these parameters: normal two-sided tail $0.0455003$; universal Chebyshev bound $0.25$.

2. **Standard-deviation multiple: 1** Set the multiple to $1$ and compare the figure and readouts.

Preset observation: At these parameters: normal two-sided tail $0.317311$; universal Chebyshev bound $1$.

3. **Standard-deviation multiple: 4** Set the multiple to $4$ and compare the figure and readouts.

Preset observation: At these parameters: normal two-sided tail $6.334\times10^{-5}$; universal Chebyshev bound $0.0625$.

### Worked examples

#### Example 1: Only a mean is known

A nonnegative waiting quantity has mean two. How large can the probability of at least ten be?

- Nonnegativity holds.
- Markov gives $2/10$.

**Answer: At most $0.2$.**

#### Example 2: Two standard deviations

For any finite positive-variance distribution, bound the probability of deviation at least two standard deviations.

- Use Chebyshev.
- $1/2^2=1/4$.

**Answer: At most $0.25$.**

### Common mistakes

- **An upper bound is an equality** Only special distributions and thresholds attain it.

- **Chebyshev works without a variance** Finite variance is a hypothesis.

### Exercises and solutions

**1. A nonnegative variable has mean three. Bound its probability of at least twelve.**

Hint: Divide mean by threshold.

Answer: $0.25$.

- $3/12=0.25$.

**2. Find the Chebyshev bound beyond at least three standard deviations.**

Hint: Take the reciprocal squared multiple.

Answer: $1/9$.

- $1/9$.

**3. Can this Markov formula be used directly for variables taking negative values?**

Hint: Its key step needs a pointwise nonnegative comparison.

Answer: Not directly.

- Negative values break that comparison.

**4. Does an upper bound of four mean probability four?**

Hint: Probabilities still do not exceed one.

Answer: No; replace it by at most one.

- The coarse bound is merely uninformative.

Prerequisites: Variance, standard deviation, and covariance terms.

## Chapter review

Try independently before reading the solutions.

**1. $X$ equals zero with probability $0.25$ and four with probability $0.75$. Find its expectation and variance.**

Hint: Calculate the first and second moments.

Answer: Expectation $3$; variance $3$.

- $EX=3,EX^2=12$.
- The variance is $12-9=3$.

**2. Source A accounts for twenty percent of cases and produces an observation with probability $0.6$; source B accounts for eighty percent and produces it with probability $0.1$. After observing it, what is the probability the source was A?**

Hint: The numerator is the A pathway; the total observation probability includes both pathways.

Answer: $0.6$.

- The pathway probabilities are $0.12,0.08$.
- The posterior probability is $0.12/0.2=0.6$.

# Chapter 4 · Discrete Probability Models

Before choosing a model, check the number of trials, independence, and whether sampling uses replacement.

Goals:
- Use binomial, geometric, and negative binomial models
- Handle sampling without replacement
- Use Poisson models and discrete approximations

## 4.1 Bernoulli and binomial distributions

*Count successes in a fixed number of independent trials sharing one success probability.*

### The idea

Count successes in a fixed number of independent trials sharing one success probability.

### Intuition

Sequences with the same success count have equal probability; a combination counts their possible positions.

### Another explanation

An exact-count event usually contains multiple sequences.

### Quick check

What does the binomial coefficient do in this model?

A. Changes each success probability
B. Counts choices of successful positions
C. Guarantees a normal approximation

Answer: B. The same success count can arise from several sequences.

### Check model assumptions

Require a fixed trial count, two outcomes, mutual independence, and constant success probability. Unequal probabilities or substantial sampling without replacement do not automatically fit.

### Find an exact success-count probability

Find one sequence probability with specified success positions, then multiply by the number of such position sets.

### Use indicators for moments

Record each success as zero or one and add. Independence also lets their variances add.

### Definition and conditions

Integers satisfy $n\ge0$, $0\le p\le1$, and $k=0,\ldots,n$.

$$
P(X=k)={n\choose k}p^k(1-p)^{n-k},\quad EX=np,\quad\operatorname{Var}(X)=np(1-p)
$$

- Integers satisfy $n\ge0$, $0\le p\le1$, and $k=0,\ldots,n$.
- Bernoulli trials are mutually independent with the same success probability.

### Derivation

Fix one sequence.

$$
P(\text{sequence})=p^k(1-p)^{n-k}
$$

Count the successful positions.

$$
\#\text{sequences}={n\choose k}
$$

Add independent indicators.

$$
X=\sum_iI_i,\quad EX=np,\quad\operatorname{Var}(X)=np(1-p)
$$

### Interactive diagram

Change success probability or trial count. How does the mass plot shift and spread?

Masses use the exact binomial formula; one selected success count and its probability are highlighted.

Online diagram: #/lesson/ps-binomial?view=visual

### Guided experiment

1. **Success probability: 0.4** Set success probability to $0.4$ and compare the figure and readouts.

Preset observation: At these parameters: binomial mean $4.8$; variance $2.88$; selected successes $4$; exact selected probability $0.212841$.

2. **Success probability: 0** Set success probability to $0$ and compare the figure and readouts.

Preset observation: At these parameters: binomial mean $0$; variance $0$; selected successes $4$; exact selected probability $0$.

3. **Success probability: 1** Set success probability to $1$ and compare the figure and readouts.

Preset observation: At these parameters: binomial mean $12$; variance $0$; selected successes $4$; exact selected probability $0$.

### Worked examples

#### Example 1: Two successes in four trials

Four independent trials each succeed with probability one half. Find exactly two successes probability.

- Choose positions: $\binom42=6$.
- Each sequence has probability $1/16$.

**Answer: $3/8$.**

#### Example 2: Mean and spread

For $X\sim\operatorname{Bin}(20,0.2)$, find mean and variance.

- $np=4$.
- $np(1-p)=3.2$.

**Answer: Mean $4$; variance $3.2$.**

### Common mistakes

- **One sequence probability suffices** An exact-count event usually contains multiple sequences.

- **Two outcomes always imply a binomial model** Fixed count, common probability, and independence are also required.

### Exercises and solutions

**1. What is the probability of all heads in three fair independent tosses?**

Hint: One sequence qualifies.

Answer: $1/8$.

- $(1/2)^3=1/8$.

**2. Find the probability of exactly one head in three independent fair tosses.**

Hint: Three success positions are possible.

Answer: $3/8$.

- $3/8$.

**3. Find the expectation of $\operatorname{Bin}(10,0.3)$.**

Hint: Multiply trial count by success probability.

Answer: $3$.

- $10(0.3)=3$.

**4. Is the count still necessarily binomial if success probability varies over time?**

Hint: Check the common-probability assumption.

Answer: Generally not.

- That assumption fails.

Prerequisites: The product rule, permutations, and combinations, Independence, disjointness, and repeated trials, Variance, standard deviation, and covariance terms.

## 4.2 Geometric and negative-binomial waiting times

*Fix a success target and count how many trials it takes.*

### The idea

Fix a success target and count how many trials it takes.

### Intuition

Binomial models fix trials and count successes. Waiting models fix successes and count trials.

### Another explanation

A fixed-probability independent model gives no such compensation.

### Quick check

What is the minimum first-success total in this book?

A. Zero
B. One
C. The reciprocal success probability

Answer: B. The successful trial is included.

### State the counting convention

This book's geometric variable includes the first successful trial, so its minimum is one. Some references count preceding failures; align conventions first.

### Understand memorylessness

Under independent repeated trials, previous failures do not change future single-trial success probability. A long wait does not make the next success inevitable.

### Wait for several successes

A negative-binomial variable counts total trials to a specified success count. The last trial succeeds; earlier successes are placed before it. Inter-success waits are independent and identically distributed, giving $E[T_r]=r/p$ and $\operatorname{Var}(T_r)=r(1-p)/p^2$.

### Definition and conditions

Trials are mutually independent Bernoulli trials with fixed $0<p\le1$.

$$
P(T=t)=(1-p)^{t-1}p,\quad ET=1/p,\quad P(T_r=t)={t-1\choose r-1}p^r(1-p)^{t-r}
$$

- Trials are mutually independent Bernoulli trials with fixed $0<p\le1$.
- Geometric totals satisfy $t\ge1$; negative-binomial totals satisfy $t\ge r$.

### Derivation

First success requires a preceding run of failures.

$$
P(T=t)=(1-p)^{t-1}p
$$

The no-success path gives the tail. Tail summation also yields $ET=\sum_{t=0}^{\infty}(1-p)^t=1/p$.

$$
P(T>t)=(1-p)^t
$$

Choose earlier success positions before the final success.

$$
P(T_r=t)={t-1\choose r-1}p^r(1-p)^{t-r}
$$

### Interactive diagram

Lower success probability. How does the waiting tail lengthen?

The finite mass window explicitly reports unplotted tail probability.

Online diagram: #/lesson/ps-geometric?view=visual

### Guided experiment

1. **Per-trial success probability: 0.25** Set per-trial probability to $0.25$ and compare the figure and readouts.

Preset observation: At these parameters: mean total wait $4$; waiting variance $12$; probability inside window $0.996829$; tail outside $0.00317121$.

2. **Per-trial success probability: 0.05** Set per-trial probability to $0.05$ and compare the figure and readouts.

Preset observation: At these parameters: mean total wait $20$; waiting variance $380$; probability inside window $0.641514$; tail outside $0.358486$.

3. **Per-trial success probability: 1** Set per-trial probability to $1$ and compare the figure and readouts.

Preset observation: At these parameters: mean total wait $1$; waiting variance $0$; probability inside window $1$; tail outside $0$.

### Worked examples

#### Example 1: First success

With success probability one quarter, find the probability the first success is on trial three.

- Fail twice, then succeed.
- $(3/4)^2(1/4)=9/64$.

**Answer: $9/64$.**

#### Example 2: Second success

For fair trials, find the probability of reaching the second success exactly on trial four.

- The first three trials have exactly one success in three possible positions.
- Each four-trial sequence has probability $1/16$.

**Answer: $3/16$.**

### Common mistakes

- **Longer failure streaks make the next success likelier** A fixed-probability independent model gives no such compensation.

- **All geometric conventions are identical** Total trials and preceding failures are two common conventions.

### Exercises and solutions

**1. With success probability $0.2$, what is the expected total wait for first success?**

Hint: Include the successful trial.

Answer: $5$.

- $1/0.2=5$.

**2. With success probability one half, find the probability of waiting more than three trials.**

Hint: The first three all fail.

Answer: $1/8$.

- $(1/2)^3=1/8$.

**3. After ten independent failures, does next-trial success probability automatically rise?**

Hint: The model keeps success probability fixed.

Answer: No.

- Future trials are independent of the past.

**4. If a source counts failures before success, how does this book's geometric mean change?**

Hint: The variables differ by one.

Answer: The mean is $(1-p)/p$.

- Failures equal total trials minus one.

Prerequisites: Bernoulli and binomial distributions.

## 4.3 Sampling without replacement and the hypergeometric law

*With fixed population composition and no replacement, use the hypergeometric law to count selected targets.*

### The idea

With fixed population composition and no replacement, use the hypergeometric law to count selected targets.

### Intuition

Selecting a target usually reduces the chance of another target on the next draw.

### Another explanation

Conditional probabilities generally change each time.

### Quick check

What mainly distinguishes this model from binomial sampling?

A. Only one draw is allowed
B. Later draws generally depend on earlier outcomes
C. There is no expectation

Answer: B. The remaining composition changes with draws.

### Specify population composition

Population size, target count, and sample size are fixed. Every unordered sample of the given size is equally likely.

### Count favorable combinations

Choose the required targets and the remaining nontargets separately. Multiply and divide by the total number of samples.

### Understand finite-population correction

Without replacement, count variance is smaller than a binomial model with the same success fraction. A small sampling fraction can justify binomial approximation.

### Definition and conditions

The population is nonempty; sample and target counts are valid integers.

$$
P(X=k)=\frac{{K\choose k}{N-K\choose n-k}}{{N\choose n}},\quad\operatorname{Var}(X)=np(1-p)\frac{N-n}{N-1},\quad p=K/N
$$

- Sampling is uniform without replacement, with integers $N\ge1$ and $0\le K,n\le N$.
- The variance formula requires $N>1$; the support also respects available targets and nontargets.

### Derivation

Count all unordered samples by combinations.

$$
{N\choose n}
$$

Choose from target and nontarget groups separately.

$$
{K\choose k}{N-K\choose n-k}
$$

Negative dependence gives the finite-population correction.

$$
\operatorname{Var}(X)=np(1-p)(N-n)/(N-1)
$$

### Interactive diagram

Increase the sampling fraction. How does the hypergeometric–binomial variance difference change?

The two count models share a mean, highlighting the finite-population correction.

Online diagram: #/lesson/ps-hypergeometric?view=visual

### Guided experiment

1. **Draws without replacement: 8** Set the draw count to $8$ and compare the figure and readouts.

Preset observation: At these parameters: shared mean $3.2$; hypergeometric variance $1.45655$; binomial variance $1.92$.

2. **Draws without replacement: 1** Set the draw count to $1$ and compare the figure and readouts.

Preset observation: At these parameters: shared mean $0.4$; hypergeometric variance $0.24$; binomial variance $0.24$.

3. **Draws without replacement: 30** Set the draw count to $30$ and compare the figure and readouts.

Preset observation: At these parameters: shared mean $12$; hypergeometric variance $0$; binomial variance $7.2$.

### Worked examples

#### Example 1: Draw two of five balls

A bag has two red and three white balls. Draw two without replacement. Find exactly one red probability.

- Favorable combinations: $2\times3=6$.
- All combinations: $\binom52=10$.

**Answer: $0.6$.**

#### Example 2: A census has no sampling variation

Draw all five balls. What is the red-count variance?

- The red count is certainly two.
- The finite-population correction numerator is zero.

**Answer: $0$.**

### Common mistakes

- **Without-replacement probabilities multiply as independent trials** Conditional probabilities generally change each time.

- **The correction factor exceeds one** For valid parameters it lies between zero and one.

### Exercises and solutions

**1. Ten items include four targets. Draw five without replacement. Find the expected target count.**

Hint: Every item's inclusion probability is the same.

Answer: $2$.

- $5(4/10)=2$.

**2. With two red among five balls, find the probability both drawn balls are red.**

Hint: Choose two targets and zero nontargets.

Answer: $0.1$.

- $1/\binom52=0.1$.

**3. Are successive draws without replacement independent?**

Hint: The first draw changes composition.

Answer: Generally not.

- Later success probability depends on the earlier outcome.

**4. After observing the entire population, does sampling error remain?**

Hint: Refer specifically to that finite population.

Answer: Its random sampling error vanishes; measurement errors may remain.

- Its composition is fully known.

Prerequisites: The product rule, permutations, and combinations, Bernoulli and binomial distributions.

## 4.4 Poisson counts and rare events

*Model the number of events in an interval using its expected count as the Poisson parameter.*

### The idea

Model the number of events in an interval using its expected count as the Poisson parameter.

### Intuition

Two events per hour on average does not mean exactly two every hour.

### Another explanation

Actual counts fluctuate; the model gives their probabilities.

### Quick check

What does the Poisson parameter represent?

A. Success probability
B. Expected count in this interval
C. Maximum count

Answer: B. It may exceed one and changes with interval length.

### Understand model conditions

A Poisson process assumes independent increments on disjoint intervals, stable rate, and sufficiently rare multiple arrivals in very short intervals. Clustering can make it unsuitable.

### Compute masses and interval scaling

Interval mean equals rate times length. Changing time units must also change the expected count accordingly.

### Check mean and variance

Poisson mean equals variance. A sample variance far above its mean can suggest heterogeneity or clustering, but one sample alone does not settle model adequacy.

### Definition and conditions

The parameter $\lambda\ge0$ is the expected count in the interval considered.

$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!},\quad EX=\operatorname{Var}(X)=\lambda
$$

- The parameter $\lambda\ge0$ is the expected count in the interval considered.
- Deriving the law from a process needs independent increments, stable rate, and related assumptions.

### Derivation

Interpret mass through a rare-event binomial limit.

$$
n\to\infty,\quad p\to0,\quad np\to\lambda
$$

The zero-count probability tends to an exponential.

$$
(1-p)^n\to e^{-\lambda}
$$

Fixed-count combinatorial terms supply the power coefficient.

$$
{n\choose k}p^k(1-p)^{n-k}\to e^{-\lambda}\lambda^k/k!
$$

### Interactive diagram

Increase the expected count. How do zero probability and distribution shape change?

The finite count window reports probability beyond it; masses use the Poisson formula.

Online diagram: #/lesson/ps-poisson?view=visual

### Guided experiment

1. **Interval mean count: 2** Set the mean count to $2$ and compare the figure and readouts.

Preset observation: At these parameters: mean and variance $2$; zero probability $0.135335$; selected count probability $0.270671$; outside-window tail $2.220\times10^{-16}$.

2. **Interval mean count: 0** Set the mean count to $0$ and compare the figure and readouts.

Preset observation: At these parameters: mean and variance $0$; zero probability $1$; selected count probability $0$; outside-window tail $0$.

3. **Interval mean count: 12** Set the mean count to $12$ and compare the figure and readouts.

Preset observation: At these parameters: mean and variance $12$; zero probability $6.144\times10^{-6}$; selected count probability $0.000442383$; outside-window tail $3.372\times10^{-6}$.

### Worked examples

#### Example 1: No arrivals

With mean two events per interval, find zero-event probability.

- Use the zero mass.
- Zero factorial is one.

**Answer: $e^{-2}\approx0.1353$.**

#### Example 2: Change the interval

At a stable rate of three per hour, what are the half-hour mean and variance?

- Scaling the interval gives mean $1.5$.
- Poisson variance equals the interval mean.

**Answer: Both $1.5$.**

### Common mistakes

- **The expected count is the fixed arrival count** Actual counts fluctuate; the model gives their probabilities.

- **A parameter above one is invalid** It is an expected count, not a probability.

### Exercises and solutions

**1. With mean count one, find exactly one probability.**

Hint: Substitute into the mass function.

Answer: $e^{-1}\approx0.3679$.

- $e^{-1}$.

**2. With mean count two, find at least one probability.**

Hint: Complement zero events.

Answer: $1-e^{-2}\approx0.8647$.

- $1-e^{-2}$.

**3. Independent Poisson counts have means two and three. Find the sum's distribution and mean.**

Hint: Use convolution or multiplying generating functions.

Answer: $\operatorname{Pois}(5)$.

- Independent Poisson counts add to a Poisson count with summed parameters.

**4. If rate changes substantially over time, can a constant-rate process directly explain it?**

Hint: Check model conditions.

Answer: Not with that process explanation.

- The stable-rate assumption fails; build another model.

Prerequisites: Bernoulli and binomial distributions.

## 4.5 Choosing discrete models and approximations

*Choose the exact model first, then explain what an approximation preserves.*

### The idea

Choose the exact model first, then explain what an approximation preserves.

### Intuition

Binomial models admit Poisson or normal approximations in different parameter regimes.

### Another explanation

Shape, variance, and tails also affect probabilities.

### Quick check

Which integer event is equivalent to $P(X<5)$ before approximation?

A. $X\le4$
B. $X\le5$
C. $X\ge5$

Answer: A. Resolve the integer event before continuity correction.

### Choose the exact benchmark

Use binomial for fixed independent trials, hypergeometric without replacement, geometric for first-success waits, and possibly Poisson for interval counts.

### Approximate rare events

With many trials and small success probability, approximate binomial by Poisson with matching mean. Equal means alone do not ensure accuracy.

### Normal approximation and continuity correction

When both expected binomial counts are sufficiently large, use a normal approximation with half-unit correction for integer events. Rules of thumb are not universal error guarantees.

### Definition and conditions

Avoid severe skew and extreme tails for binomial normal approximation; commonly check that $np,n(1-p)$ are sufficiently large.

$$
X\sim\operatorname{Bin}(n,p):\quad P(X\le k)\approx\Phi\!\left(\frac{k+1/2-np}{\sqrt{np(1-p)}}\right)
$$

- Avoid severe skew and extreme tails for binomial normal approximation; commonly check that $np,n(1-p)$ are sufficiently large.
- Poisson approximation needs many independent small-probability opportunities; computable exact probabilities remain the benchmark.

### Derivation

Match binomial mean and variance.

$$
\mu=np,\quad\sigma^2=np(1-p)
$$

Replace integer lattice points by continuous cells.

$$
\{X\le k\}\longmapsto(-\infty,k+1/2]
$$

Then standardize.

$$
z=(k+1/2-\mu)/\sigma
$$

### Interactive diagram

Increase success probability. How does Poisson approximation to binomial change?

Exact binomial and Poisson masses are compared side by side; approximation is not equality.

Online diagram: #/lesson/ps-approximations?view=visual

### Guided experiment

1. **Binomial success probability: 0.02** Set the probability to $0.02$ and compare the figure and readouts.

Preset observation: At these parameters: binomial mean $1$; variance $0.98$; total variation distance $0.00558341$.

2. **Binomial success probability: 0.005** Set the probability to $0.005$ and compare the figure and readouts.

Preset observation: At these parameters: binomial mean $0.25$; variance $0.24875$; total variation distance $0.000855723$.

3. **Binomial success probability: 0.5** Set the probability to $0.5$ and compare the figure and readouts.

Preset observation: At these parameters: binomial mean $25$; variance $12.5$; total variation distance $0.166965$.

### Worked examples

#### Example 1: Approximate zero successes

For $n=100,p=0.01$, compare exact zero probability with Poisson approximation.

- Exact: $0.99^{100}\approx0.3660$.
- Approximate: $e^{-1}\approx0.3679$.

**Answer: Close, but unequal.**

#### Example 2: Find the corrected boundary

For a continuous normal approximation to $P(X\ge5)$, what boundary is used?

- The cell for integer five starts at $4.5$.
- Use right-tail threshold $4.5$.

**Answer: $4.5$.**

### Common mistakes

- **Matching means make distributions interchangeable** Shape, variance, and tails also affect probabilities.

- **A rule-of-thumb threshold guarantees all tails are accurate** Extreme tails can still have large relative errors.

### Exercises and solutions

**1. A binomial has mean ten and variance nine. What standard deviation should the normal approximation use?**

Hint: Standard deviation is the square root of variance.

Answer: $3$.

- $\sqrt9=3$.

**2. For $P(X\le8)$, what continuous boundary is used?**

Hint: Include the half-cell above eight.

Answer: $8.5$.

- The upper boundary is $8.5$.

**3. Is a normal approximation necessarily good for $n=100,p=0.001$?**

Hint: Inspect the smaller expected count.

Answer: Usually unsuitable.

- Expected successes are only $0.1$, giving strong skew.

**4. Does a difference between exact and approximate probabilities necessarily indicate a programming error?**

Hint: First allow approximation error.

Answer: Not necessarily.

- Approximation permits differences; inspect their size and the assumptions.

Prerequisites: Poisson counts and rare events, Sampling without replacement and the hypergeometric law.

## Chapter review

Try independently before reading the solutions.

**1. Three of ten objects are targets. Draw four without replacement. Find the expected target count and the probability of exactly one target.**

Hint: Use a hypergeometric model; the draws are not independent.

Answer: Expectation $1.2$; probability $0.5$.

- The expectation is $4(3/10)=1.2$.
- The probability is $\binom31\binom73/\binom{10}4=105/210$.

**2. A Poisson process averages $0.5$ events per minute and has independent, stationary increments. What is the probability of at least one event in three minutes?**

Hint: Find the three-minute parameter, then take the complement of zero events.

Answer: $1-e^{-1.5}$.

- The three-minute mean is $1.5$.
- The probability of zero events is $e^{-1.5}$.

# Chapter 5 · Continuous Probability Models

Assign probabilities by integration, then study normal standardization and transformations.

Goals:
- Calculate interval probabilities from a density
- Recognize uniform, exponential, and normal models
- Calculate transformations and expectations of continuous variables

## 5.1 Densities and continuous CDFs

*For a variable with a density, interval probability is area under its density curve.*

### The idea

For a variable with a density, interval probability is area under its density curve.

### Intuition

Density measures probability concentration over an interval; a single point has no width.

### Another explanation

The constraint is total area one, not height.

### Quick check

For a variable with density, what is probability at one fixed point?

A. Density height
B. Zero
C. One

Answer: B. The singleton has zero length.

### Separate height from probability

A density may exceed one. It must be nonnegative and integrate to one. For a variable with a density, every singleton has probability zero.

### Integrate to obtain the distribution

The CDF accumulates left-hand area; subtract its endpoint values for interval probabilities. A density is one possible representation when it exists.

### Check the support

The formula holds only on its specified support, with density zero outside. Do not extend a polynomial density across the entire real line.

### Definition and conditions

The variable has a nonnegative integrable density with total integral one.

$$
F(x)=\int_{-\infty}^{x}f(t)dt,\quad P(a<X\le b)=\int_a^bf(x)dx
$$

- The variable has a nonnegative integrable density with total integral one.
- Distributions with jumps are not pure density models of this kind.

### Derivation

Normalize the whole support's area.

$$
\int_{-\infty}^{\infty}f(x)dx=1
$$

Accumulate to the threshold to obtain the CDF.

$$
F(x)=\int_{-\infty}^{x}f(t)dt
$$

Subtract, leaving only the interval's area.

$$
F(b)-F(a)=\int_a^bf(x)dx
$$

### Interactive diagram

Move the upper limit. How do the area and CDF change together?

A linear density on the unit interval separates density height from cumulative probability.

Online diagram: #/lesson/ps-density?view=visual

### Guided experiment

1. **Integration upper limit: 0.5** Set the upper limit to $0.5$ and compare the figure and readouts.

Preset observation: At these parameters: density at threshold $1$; left area $0.25$; singleton probability $0$.

2. **Integration upper limit: 0** Set the upper limit to $0$ and compare the figure and readouts.

Preset observation: At these parameters: density at threshold $0$; left area $0$; singleton probability $0$.

3. **Integration upper limit: 1** Set the upper limit to $1$ and compare the figure and readouts.

Preset observation: At these parameters: density at threshold $2$; left area $1$; singleton probability $0$.

### Worked examples

#### Example 1: A normalizing constant

Let $f(x)=cx$ on $0\le x\le1$, zero outside. Find $c$.

- Its integral is $c/2$.
- Set total area to one.

**Answer: $c=2$.**

#### Example 2: Compute an area

For that density, find $P(X\le1/2)$.

- Integrate $\int_0^{1/2}2x\,dx$.
- An antiderivative is the square.

**Answer: $1/4$.**

### Common mistakes

- **Density cannot exceed one** The constraint is total area one, not height.

- **Every distribution has an ordinary density** Discrete and some other distributions cannot be fully represented that way.

### Exercises and solutions

**1. A variable has density $2x$ on $[0,1]$, zero outside. Find $P(X=1/2)$.**

Hint: A point has no area.

Answer: $0$.

- Its integral is zero.

**2. Is $f(x)=4$ on $[0,1/4]$, zero outside, a valid density?**

Hint: Check nonnegativity and total area.

Answer: Valid.

- Area is $4(1/4)=1$.

**3. A variable has density $2x$ on $[0,1]$, zero outside. Find $P(X>1/2)$.**

Hint: Use the complement.

Answer: $3/4$.

- $1-1/4=3/4$.

**4. Does a density value $1.5$ prove the model invalid?**

Hint: Density is not singleton probability.

Answer: No.

- Check the total integral.

Prerequisites: Random variables, mass functions, and CDFs.

## 5.2 Uniform distributions and exponential waits

*Equal-length intervals have equal probabilities under uniformity; a constant Poisson rate gives exponential waiting.*

### The idea

Equal-length intervals have equal probabilities under uniformity; a constant Poisson rate gives exponential waiting.

### Intuition

Uniformity favors no location; exponential waiting gives no compensation for time already waited.

### Another explanation

They are reciprocals with different units.

### Quick check

As exponential rate increases, how does mean wait change?

A. Longer
B. Shorter
C. Unchanged

Answer: B. Mean wait is reciprocal rate.

### Build a uniform model

A finite interval has constant density determined by area one, and zero outside. No analogous uniform probability density exists on the entire unbounded real axis.

### Connect counts and waiting

In a Poisson process, waiting past a time means no arrivals before it. The exponential tail therefore comes from Poisson zero probability.

### Check memorylessness

The exponential remaining-wait distribution does not change with elapsed wait. Aging, cycles, or queue states changing the rate may invalidate the model.

### Definition and conditions

For the uniform model, $a<b$, and density is nonzero only on that interval.

$$
X\sim U(a,b):f(x)=\frac1{b-a};\qquad T\sim\operatorname{Exp}(\lambda):P(T>t)=e^{-\lambda t},\ ET=1/\lambda
$$

- For the uniform model, $a<b$, and density is nonzero only on that interval.
- The exponential uses rate $\lambda>0$ and nonnegative waiting time.

### Derivation

Total area determines the uniform height.

$$
(b-a)f=1
$$

The exponential tail is the probability of zero arrivals.

$$
P(T>t)=P(N(t)=0)=e^{-\lambda t}
$$

A probability ratio shows the remaining wait does not depend on the past.

$$
P(T>s+t\mid T>s)=e^{-\lambda t}
$$

### Interactive diagram

Increase the arrival rate. What happens to the probability of waiting past a fixed threshold?

The density, tail area, and mean are shown. Memorylessness applies only to the exponential model.

Online diagram: #/lesson/ps-uniform-exponential?view=visual

### Guided experiment

1. **Arrival rate: 2** Set the arrival rate to $2$ and compare the figure and readouts.

Preset observation: At these parameters: mean wait $0.5$; probability above threshold $0.135335$; at or below threshold $0.864665$.

2. **Arrival rate: 0.2** Set the arrival rate to $0.2$ and compare the figure and readouts.

Preset observation: At these parameters: mean wait $5$; probability above threshold $0.818731$; at or below threshold $0.181269$.

3. **Arrival rate: 4** Set the arrival rate to $4$ and compare the figure and readouts.

Preset observation: At these parameters: mean wait $0.25$; probability above threshold $0.0183156$; at or below threshold $0.981684$.

### Worked examples

#### Example 1: A uniform interval

For a uniform draw on $[2,8]$, find the probability of $[3,5]$.

- Target length two, total length six.
- Take the length ratio.

**Answer: $1/3$.**

#### Example 2: Remaining exponential wait

Rate is two per time unit. After waiting three units, what is the probability of waiting more than one additional unit?

- Use memorylessness.
- The remaining tail is $e^{-2(1)}$.

**Answer: $e^{-2}\approx0.1353$.**

### Common mistakes

- **Rate and mean waiting time are the same quantity** They are reciprocals with different units.

- **Every waiting distribution is memoryless** Memorylessness is a specific model property, not a general fact about waiting.

### Exercises and solutions

**1. What is the density height of $U(0,4)$?**

Hint: Constant height times width must be one.

Answer: $0.25$.

- $1/4$.

**2. An exponential has rate $0.5$. Find its mean wait.**

Hint: Use the rate convention.

Answer: $2$.

- $1/0.5=2$.

**3. At rate two, find probability of waiting at most one.**

Hint: Complement the tail.

Answer: $1-e^{-2}$.

- $1-e^{-2}$.

**4. If an exponential is described as having mean two, is its rate also two?**

Hint: Check the parameter convention.

Answer: The rate is $1/2$.

- Rate is reciprocal mean.

Prerequisites: Densities and continuous CDFs, Poisson counts and rare events.

## 5.3 Normal distributions and standardization

*Subtract the mean and divide by standard deviation to put normal probabilities on one common scale.*

### The idea

Subtract the mean and divide by standard deviation to put normal probabilities on one common scale.

### Intuition

Bell curves with different locations and widths align after changing units.

### Another explanation

Standardization and the normal assumption are separate steps.

### Quick check

What is the second parameter in $N(\mu,\sigma^2)$?

A. Standard deviation
B. Variance
C. Standard error

Answer: B. Take its square root for the standardizing denominator.

### Identify both parameters

Mean controls location and standard deviation width. In $N(\mu,\sigma^2)$, the second parameter is variance.

### Standardize interval bounds

Subtract mean and divide each threshold by standard deviation, then use the standard normal CDF. Keep left and right tails distinct.

### Limit the empirical rule

Approximately sixty-eight, ninety-five, and ninety-nine point seven percent within one, two, and three standard deviations is a normal-model rule, not a universal one.

### Definition and conditions

$X\sim N(\mu,\sigma^2)$ with $\sigma>0$.

$$
Z=\frac{X-\mu}{\sigma}\sim N(0,1),\qquad f_X(x)=\frac{e^{-(x-\mu)^2/(2\sigma^2)}}{\sigma\sqrt{2\pi}}
$$

- $X\sim N(\mu,\sigma^2)$ with $\sigma>0$.
- Nonnormal variables can be standardized without thereby becoming normal.

### Derivation

Center on the mean.

$$
E[X-\mu]=0
$$

Normalize the scale.

$$
\operatorname{Var}((X-\mu)/\sigma)=1
$$

Affine transformations preserve normality.

$$
P(X\le x)=\Phi((x-\mu)/\sigma)
$$

### Interactive diagram

For a fixed threshold, vary mean or standard deviation. How does the left area change?

Normal density and CDF are shown; the CDF also computes unplotted tails.

Online diagram: #/lesson/ps-normal?view=visual

### Guided experiment

1. **Population mean: 0** Set the population mean to $0$ and compare the figure and readouts.

Preset observation: At these parameters: standardized threshold $1$; left probability $0.841345$.

2. **Population mean: -2** Set the population mean to $-2$ and compare the figure and readouts.

Preset observation: At these parameters: standardized threshold $3$; left probability $0.99865$.

3. **Population mean: 2** Set the population mean to $2$ and compare the figure and readouts.

Preset observation: At these parameters: standardized threshold $-1$; left probability $0.158655$.

### Worked examples

#### Example 1: Read a left tail

If $X\sim N(10,4)$, find $P(X\le12)$.

- Standard deviation is two.
- The standardized threshold is one.

**Answer: $\Phi(1)\approx0.8413$.**

#### Example 2: A central interval

What probability lies within $1.96$ standard deviations of a normal mean?

- Each tail has approximately $0.025$.
- The middle probability is approximately $0.95$.

**Answer: Approximately $0.95$.**

### Common mistakes

- **Standardization creates normality** Standardization and the normal assumption are separate steps.

- **A normal curve vanishes outside a finite interval** Its support is the whole real line; probability remains outside finite windows.

### Exercises and solutions

**1. For $N(5,9)$, standardize $x=8$.**

Hint: Standard deviation is three.

Answer: $1$.

- $(8-5)/3=1$.

**2. What is the standard normal probability above zero?**

Hint: Use symmetry.

Answer: $0.5$.

- Half the area lies to the right.

**3. Does standardization make every distribution normal?**

Hint: It changes location and scale only.

Answer: No.

- Skewness or discreteness can remain.

**4. What is the standard deviation of $N(2,16)$?**

Hint: Its second parameter is variance.

Answer: $4$.

- $\sqrt{16}=4$.

Prerequisites: Uniform distributions and exponential waits.

## 5.4 Transforming variables: start with the CDF

*Changing variables changes both values and the density assigned to interval lengths.*

### The idea

Changing variables changes both values and the density assigned to interval lengths.

### Intuition

Compress an interval by half and its density must double to preserve its probability.

### Another explanation

Interval-length scaling is also required.

### Quick check

What can go wrong if support is not updated after transformation?

A. No effect on probability
B. Incorrect total integral or interval probabilities
C. Only the font changes

Answer: B. The density formula and support jointly define the distribution.

### Start with the CDF

Rewrite $Y\le y$ as an event for the original variable, find its probability, then differentiate if needed. Nonmonotone transformations may have several preimage intervals.

### Use monotone change of variables

On a strictly monotone differentiable branch with differentiable inverse, transform density using the absolute Jacobian factor.

### Keep the support and branches

Squaring can merge positive and negative branches. Omitting the absolute value or another branch loses probability.

### Definition and conditions

The formula applies on monotone differentiable invertible branches; multiple preimages generally require summing their contributions.

$$
f_Y(y)=f_X(g^{-1}(y))\left|\frac{d}{dy}g^{-1}(y)\right|
$$

- The formula applies on monotone differentiable invertible branches; multiple preimages generally require summing their contributions.
- Transform the support together with the variable.

### Derivation

Rewrite the new-variable event in the old variable.

$$
F_Y(y)=P(g(X)\le y)
$$

On an increasing branch, transform the integration limit.

$$
F_Y(y)=F_X(g^{-1}(y))
$$

The chain rule gives density scaling; use absolute value on a decreasing branch.

$$
f_Y(y)=f_X(g^{-1}(y))|(g^{-1})\prime(y)|
$$

### Interactive diagram

Change a linear scale factor. Why does density height change inversely?

A uniform linear transformation preserves area; the text separately handles multi-branch squaring.

Online diagram: #/lesson/ps-transformations?view=visual

### Guided experiment

1. **Linear scale factor: 2** Set the scale factor to $2$ and compare the figure and readouts.

Preset observation: At these parameters: expectation $2$; variance $0.333333$; density height $0.5$; left probability $0.5$.

2. **Linear scale factor: 0.25** Set the scale factor to $0.25$ and compare the figure and readouts.

Preset observation: At these parameters: expectation $1.125$; variance $0.00520833$; density height $4$; left probability $1$.

3. **Linear scale factor: 4** Set the scale factor to $4$ and compare the figure and readouts.

Preset observation: At these parameters: expectation $3$; variance $1.33333$; density height $0.25$; left probability $0.25$.

### Worked examples

#### Example 1: Linear scaling

For $X\sim U(0,1),Y=2X+1$, find the new density.

- The support becomes one to three.
- The inverse derivative is one half.

**Answer: $Y\sim U(1,3)$, with density $1/2$.**

#### Example 2: Squaring

For $X\sim U(-1,1),Y=X^2$, find $F_Y(y)$.

- For $0\le y\le1$, the original event is $-\sqrt y\le X\le\sqrt y$.
- Divide its length by two.

**Answer: $F_Y(y)=0$ for $y<0$, $F_Y(y)=\sqrt y$ for $0\le y\le1$, and $F_Y(y)=1$ for $y>1$. Density is $1/(2\sqrt y)$ for $0<y<1$, zero outside.**

### Common mistakes

- **Changing variables merely replaces letters** Interval-length scaling is also required.

- **Squaring has only one preimage** Positive and negative support generally gives two branches.

### Exercises and solutions

**1. For $X\sim U(0,1),Y=3X$, find the density height.**

Hint: Preserve probability area.

Answer: $1/3$.

- The support has width three.

**2. For $X\sim U(-1,1)$, find $P(X^2\le1/4)$.**

Hint: Undo the square event.

Answer: $1/2$.

- $|X|\le1/2$, giving length one divided by two.

**3. Why use an absolute derivative for a decreasing transformation?**

Hint: Density must be nonnegative.

Answer: Remove orientation while retaining the length ratio.

- Length scaling uses absolute magnitude.

**4. Is using only the positive square root always correct for squaring?**

Hint: Check whether the original support includes negative values.

Answer: Not necessarily.

- If both signs occur, the negative branch also contributes probability.

Prerequisites: Normal distributions and standardization.

## 5.5 Continuous moments and tail integrals

*Replace probability-weighted sums by integrals to calculate continuous averages.*

### The idea

Replace probability-weighted sums by integrals to calculate continuous averages.

### Intuition

Density supplies the probability weights; integration accumulates their contributions.

### Another explanation

Integrability still needs checking.

### Quick check

What is integrated for $E[X^2]$?

A. $x^2f(x)$
B. $xf(x)^2$
C. $f(x)^2$

Answer: A. Square values, not their probability weights.

### Integrate directly

To find a function expectation, integrate over the original variable; a transformed density is unnecessary.

### Use second moments

Variance is still second moment minus squared mean. Check convergence first: heavy tails may lack a finite expectation or variance.

### Compute waits from tails

A nonnegative variable's expectation is the area under its survival function, connecting average waits with tail probability.

### Definition and conditions

Absolute integrability gives a finite expectation; nonnegative variables may have infinite expectation.

$$
E[g(X)]=\int g(x)f_X(x)dx,\qquad E[X]=\int_0^\infty P(X>t)dt\quad(X\ge0)
$$

- Absolute integrability gives a finite expectation; nonnegative variables may have infinite expectation.
- The tail-integral derivation exchanges integrals using nonnegativity.

### Derivation

Express a nonnegative number as an integral of height indicators.

$$
x=\int_0^\infty\mathbf1\{t<x\}dt
$$

Exchange integrals for the nonnegative integrand.

$$
EX=\int_0^\infty E[\mathbf1\{X>t\}]dt
$$

An indicator's expectation equals its event probability.

$$
EX=\int_0^\infty P(X>t)dt
$$

### Interactive diagram

Change a uniform interval's length. How do mean and variance scale?

Integral-based readouts accompany density area; not every distribution has finite moments.

Online diagram: #/lesson/ps-continuous-moments?view=visual

### Guided experiment

1. **Uniform upper endpoint: 2** Set the upper endpoint to $2$ and compare the figure and readouts.

Preset observation: At these parameters: expectation $1$; variance $0.333333$; density height $0.5$.

2. **Uniform upper endpoint: 0.5** Set the upper endpoint to $0.5$ and compare the figure and readouts.

Preset observation: At these parameters: expectation $0.25$; variance $0.0208333$; density height $2$.

3. **Uniform upper endpoint: 8** Set the upper endpoint to $8$ and compare the figure and readouts.

Preset observation: At these parameters: expectation $4$; variance $5.33333$; density height $0.125$.

### Worked examples

#### Example 1: Uniform variance

For $X\sim U(0,2)$, find variance.

- $EX=1$ and $EX^2=\int_0^2x^2/2\,dx=4/3$.
- Subtract the squared mean.

**Answer: $1/3$.**

#### Example 2: Exponential mean

An exponential survival function is $e^{-3t}$. Find the mean.

- Integrate from zero to infinity.
- An antiderivative is $-e^{-3t}/3$.

**Answer: $1/3$.**

### Common mistakes

- **Symmetry guarantees a finite mean** Integrability still needs checking.

- **A normalized density guarantees finite variance** The second moment may still diverge in the tails.

### Exercises and solutions

**1. Find the second moment of $U(0,1)$.**

Hint: Integrate the square against density one.

Answer: $1/3$.

- $\int_0^1x^2dx=1/3$.

**2. Find the variance of $U(0,1)$.**

Hint: Subtract squared mean from second moment.

Answer: $1/12$.

- $1/3-1/4=1/12$.

**3. Does symmetry make a Cauchy variable's expectation zero?**

Hint: Check absolute integrability, not symmetric truncations.

Answer: Its ordinary expectation does not exist; it is not zero.

- Its absolute first moment diverges.

**4. What does infinite tail area mean for a nonnegative variable?**

Hint: The tail formula permits infinity.

Answer: Expectation is positive infinity.

- The average wait has no finite value.

Prerequisites: Transforming variables: start with the CDF, Expectation and linearity.

## Chapter review

Try independently before reading the solutions.

**1. A density is $f(x)=3x^2$ on $[0,1]$. Find its cumulative distribution function and expectation.**

Hint: Keep the support when integrating.

Answer: $F(x)=x^3$ within the support; $EX=3/4$.

- Within the interval, the cumulative probability is $x^3$; it is zero to the left and one to the right.
- The expectation is $\int_0^1 3x^3dx=3/4$.

**2. $X\sim N(4,9)$. Find $P(1<X<7)$.**

Hint: Standardize both endpoints.

Answer: Approximately $0.6827$.

- The standard deviation is three, so the endpoints become minus one and one.
- The probability is $\Phi(1)-\Phi(-1)$.

# Chapter 6 · Several Random Variables

Joint distributions retain relationships between variables; marginal distributions discard that information.

Goals:
- Find marginal and conditional distributions
- Distinguish independence from zero correlation
- Calculate covariance and conditional expectation

## 6.1 Joint and marginal distributions

*A joint distribution records the probabilities of paired values.*

### The idea

A joint distribution records the probabilities of paired values.

### Intuition

Knowing each subject's grade distribution does not tell you how the two grades are paired.

### Another explanation

Each cell retains the pairing between variables.

### Quick check

When finding one variable's marginal, which variable do you sum over?

A. The other variable
B. Only the diagonal
C. Square the probabilities

Answer: A. A marginal ignores the specific value of the other coordinate.

### Build a joint table

Each cell gives the probability of a pair of values. All entries are nonnegative and sum to one.

### Find marginals

To ignore the other variable, sum over its rows or columns. For continuous variables, integrate along the other coordinate.

### Retain dependence information

Different joint distributions can have identical marginals. Marginals alone cannot recover the pairing.

### Definition and conditions

Joint probabilities sum to one; a joint density integrates to one.

$$
p_X(x)=\sum_yp_{X,Y}(x,y),\qquad f_X(x)=\int_{-\infty}^{\infty}f_{X,Y}(x,y)dy
$$

- Joint probabilities sum to one; a joint density integrates to one.
- To find a marginal, sum or integrate over the other variable's entire support.

### Derivation

Partition the event by the other coordinate's possible values.

$$
\{X=x\}=\bigcup_y\{X=x,Y=y\}
$$

Different values give mutually exclusive events.

$$
P(X=x)=\sum_yP(X=x,Y=y)
$$

In the continuous case, accumulate along the other coordinate.

$$
f_X(x)=\int f_{X,Y}(x,y)dy
$$

### Interactive diagram

Keep the marginals fixed and move probability toward the diagonal. How does the relationship change?

Cell areas and values display the joint probabilities; marginals appear at the sides.

Online diagram: #/lesson/ps-joint?view=visual

### Guided experiment

1. **Upper-left probability: 0.1** Set the upper-left probability to $0.1$ and compare the diagram and readings.

Preset observation: At this preset: first-row marginal $0.5$; first-column marginal $0.5$; upper-left probability $0.1$; probability of equal categories $0.2$.

2. **Upper-left probability: 0** Set the upper-left probability to $0$ and compare the diagram and readings.

Preset observation: At this preset: first-row marginal $0.5$; first-column marginal $0.5$; upper-left probability $0$; probability of equal categories $0$.

3. **Upper-left probability: 0.5** Set the upper-left probability to $0.5$ and compare the diagram and readings.

Preset observation: At this preset: first-row marginal $0.5$; first-column marginal $0.5$; upper-left probability $0.5$; probability of equal categories $1$.

### Worked examples

#### Example 1: Find a row sum

A joint table has rows $(0.1,0.2)$ and $(0.3,0.4)$. Find the first row's marginal probability.

- Add the entries in that row.
- $0.1+0.2=0.3$.

**Answer: $0.3$.**

#### Example 2: Identical marginals

Two Bernoulli variables each have success probability one half. Can one model make them always equal and another always opposite?

- The equal model puts half the mass in each diagonal cell.
- The opposite model puts half the mass in each off-diagonal cell.

**Answer: Yes. The marginals agree but the joint distributions differ.**

### Common mistakes

- **A joint table records only marginals** Each cell retains the pairing between variables.

- **A joint density's value at one point is a probability** Probability still requires integration over a region.

### Exercises and solutions

**1. Using the first example, find the second column's marginal probability.**

Hint: Add the entries in the column.

Answer: $0.6$.

- $0.2+0.4=0.6$.

**2. Using the first example, find the probability that both variables are in their second category.**

Hint: Read the corresponding joint cell.

Answer: $0.4$.

- The second row, second column contains $0.4$.

**3. Do two marginal distributions determine the joint distribution?**

Hint: Compare matching and opposite pairings.

Answer: Not in general.

- Both can have the same marginals.

**4. The joint density is one on the unit square. Find $P(X<1/2,Y<1/3)$.**

Hint: Integrate over the rectangle's area.

Answer: $1/6$.

- $1/2\times1/3=1/6$.

Prerequisites: Continuous moments and tail integrals.

## 6.2 Conditional distributions and densities

*Fix one variable, then normalize the remaining slice.*

### The idea

Fix one variable, then normalize the remaining slice.

### Intuition

A row of a joint table usually does not sum to one. Divide by its row sum to obtain a conditional distribution.

### Another explanation

Usually it must still be divided by the marginal density.

### Quick check

What is the second entry after normalizing the joint row $(0.1,0.3)$?

A. $0.3$
B. $0.4$
C. $0.75$

Answer: C. The denominator is the total mass of the conditioning row.

### Discrete conditional tables

Within the row or column for the given value, divide by its marginal probability. The new probabilities sum to one.

### Continuous conditional densities

Conditioning on a continuous value does not mean dividing probabilities of zero-probability points. Define the conditional density using the joint-to-marginal density ratio.

### Compare slices

Changes in slice shape or center across conditioning values show how information about one variable changes the other's distribution.

### Definition and conditions

The denominator probability or density must be positive.

$$
p_{Y\mid X}(y\mid x)=\frac{p_{X,Y}(x,y)}{p_X(x)},\qquad f_{Y\mid X}(y\mid x)=\frac{f_{X,Y}(x,y)}{f_X(x)}
$$

- The denominator probability or density must be positive.
- Continuous conditional density identities hold in the appropriate almost-everywhere sense. A marginal density is not a point probability.

### Derivation

Take one row of the joint table.

$$
p(x,y)
$$

Use its total mass as the normalizing factor.

$$
p_X(x)=\sum_yp(x,y)
$$

Division produces conditional probabilities summing to one.

$$
\sum_yp(y\mid x)=1
$$

### Interactive diagram

Select different conditioning rows. How does the normalized distribution change?

Compare raw joint probabilities with conditional probabilities from the same table; their denominators differ.

Online diagram: #/lesson/ps-conditional-distributions?view=visual

### Guided experiment

1. **Upper-left probability: 0.1** Set the upper-left probability to $0.1$ and compare the diagram and readings.

Preset observation: At this preset: first-row marginal $0.5$; first-column marginal $0.5$; upper-left probability $0.1$; conditional first-column probability in the selected row $0.2$.

2. **Upper-left probability: 0** Set the upper-left probability to $0$ and compare the diagram and readings.

Preset observation: At this preset: first-row marginal $0.5$; first-column marginal $0.5$; upper-left probability $0$; conditional first-column probability in the selected row $0$.

3. **Upper-left probability: 0.5** Set the upper-left probability to $0.5$ and compare the diagram and readings.

Preset observation: At this preset: first-row marginal $0.5$; first-column marginal $0.5$; upper-left probability $0.5$; conditional first-column probability in the selected row $1$.

### Worked examples

#### Example 1: Normalize a row

A joint row is $(0.1,0.3)$. Given this row, find the two conditional probabilities.

- The row sum is $0.4$.
- Divide both entries by $0.4$.

**Answer: $0.25,0.75$.**

#### Example 2: Triangular support

The joint density is two on $0<x<y<1$. Find the density of $Y$ given $X=x$.

- The marginal is $f_X(x)=2(1-x)$.
- Divide by the marginal and retain $x<y<1$.

**Answer: $1/(1-x)$: uniform on $(x,1)$.**

### Common mistakes

- **The unnormalized slice is already a conditional density** Usually it must still be divided by the marginal density.

- **Continuous conditioning cannot be defined** The zero-over-zero event formula fails, but conditional densities provide a valid definition under appropriate conditions.

### Exercises and solutions

**1. Find the conditional distribution of the joint row $(0.2,0.2)$.**

Hint: Divide by its row sum.

Answer: $(0.5,0.5)$.

- Divide each entry by $0.4$.

**2. A proposed conditional distribution sums to $0.4$. Is it normalized?**

Hint: Conditional probabilities must sum to one.

Answer: No.

- It still retains the original row's total probability.

**3. Can a continuous conditional density be calculated directly as $P(Y=y,X=x)/P(X=x)$?**

Hint: The denominator is usually zero.

Answer: No.

- Use a density ratio or another regular conditional-distribution definition.

**4. For the triangular model, find $E[Y\mid X=1/2]$.**

Hint: The conditional uniform interval runs from one half to one.

Answer: $3/4$.

- Its midpoint is $3/4$.

Prerequisites: Joint and marginal distributions.

## 6.3 Independent variables and product distributions

*Independence requires joint probabilities to factor for every pair of value regions.*

### The idea

Independence requires joint probabilities to factor for every pair of value regions.

### Intuition

Checking one cell or one pair of means cannot establish independence of entire variables.

### Another explanation

One moment condition cannot replace all distributional conditions.

### Quick check

A density formula factors but is defined only on a triangle. Must the variables be independent?

A. Yes
B. Not necessarily; check the entire support
C. Marginals do not exist

Answer: B. The support is part of the joint distribution.

### Use the distribution definition

Independence requires events defined by any measurable value regions to be independent. For discrete variables, check every cell's product relationship.

### Check continuous support

Variables with a joint density are independent when it factors into their marginal densities. A factorable-looking formula is insufficient unless the support is handled too.

### Expectations of functions

Independence factors expectations of integrable products. A single matching product expectation does not imply independence.

### Definition and conditions

Use the corresponding product criterion for discrete masses or densities.

$$
X\perp Y\iff F_{X,Y}(x,y)=F_X(x)F_Y(y)\quad\forall x,y
$$

- Use the corresponding product criterion for discrete masses or densities.
- The moments used in integrals and expectations must exist.

### Derivation

Require the product relationship on every rectangular region.

$$
P(X\le x,Y\le y)=P(X\le x)P(Y\le y)
$$

Each discrete cell must therefore factor.

$$
p(x,y)=p_X(x)p_Y(y)
$$

Sum or integrate an integrable product.

$$
E[g(X)h(Y)]=E[g(X)]E[h(Y)]
$$

### Interactive diagram

Change one marginal. How does the entire product table change?

Rebuild every cell under independence and compare it with the product of its marginals.

Online diagram: #/lesson/ps-independent-variables?view=visual

### Guided experiment

1. **First-row marginal: 0.3** Set the first-row marginal probability to $0.3$ and compare the diagram and readings.

Preset observation: At this preset: first-row marginal $0.3$; first-column marginal $0.4$; upper-left probability $0.12$; first-column probability conditional on the first row $0.4$.

2. **First-row marginal: 0.05** Set the first-row marginal probability to $0.05$ and compare the diagram and readings.

Preset observation: At this preset: first-row marginal $0.05$; first-column marginal $0.4$; upper-left probability $0.02$; first-column probability conditional on the first row $0.4$.

3. **First-row marginal: 0.95** Set the first-row marginal probability to $0.95$ and compare the diagram and readings.

Preset observation: At this preset: first-row marginal $0.95$; first-column marginal $0.4$; upper-left probability $0.38$; first-column probability conditional on the first row $0.4$.

### Worked examples

#### Example 1: Check all four cells

A joint table has rows $(0.12,0.18)$ and $(0.28,0.42)$. Are the variables independent?

- The row sums are $0.3,0.7$ and the column sums are $0.4,0.6$.
- Every cell equals its corresponding marginal product.

**Answer: Yes, they are independent.**

#### Example 2: Support matters

The density is two on $0<x<y<1$. Are the variables independent?

- A larger given $X$ restricts the possible values of $Y$.
- The joint support is not the full rectangle of marginal supports, so the product relationship fails.

**Answer: No.**

### Common mistakes

- **A matching product expectation implies independence** One moment condition cannot replace all distributional conditions.

- **Factor the formula without checking support** Omitting the support changes the integral and joint probabilities.

### Exercises and solutions

**1. Independent Bernoulli variables have success probabilities $0.2,0.5$. Find the probability of two successes.**

Hint: Multiply the probabilities.

Answer: $0.1$.

- $0.1$.

**2. For independent variables with $E[X]=2,E[Y]=3$, find $E[XY]$.**

Hint: Factor the product expectation.

Answer: $6$.

- $2(3)=6$.

**3. Does verifying the upper-left cell alone establish independence of a joint table?**

Hint: The requirement covers all values.

Answer: No.

- Other cells may violate the product relationship.

**4. Do separate deterministic transformations of independent variables remain independent?**

Hint: Each transformed event still depends only on its own original variable.

Answer: Yes.

- The new variables' events belong to the original independent information.

Prerequisites: Conditional distributions and densities.

## 6.4 Covariance, correlation, and variance of a sum

*Covariance measures the direction of joint deviations; correlation removes the units.*

### The idea

Covariance measures the direction of joint deviations; correlation removes the units.

### Intuition

Positive correlation means deviations often point together. They need not do so every time, and correlation does not establish causation.

### Another explanation

Strong nonlinear dependence can remain.

### Quick check

Does zero correlation rule out nonlinear dependence?

A. Yes
B. No
C. Only when variance is small

Answer: B. Correlation primarily describes linear joint variation.

### Calculate cross-deviations

Multiply each variable's deviation from its own mean, then average. The balance of positive and negative products determines the sign.

### Standardize covariance

With nonzero standard deviations, correlation lies between minus one and one. It measures linear association, not every form of nonlinear dependence.

### Keep covariance in a sum's variance

Expanding the square produces twice the covariance. Uncorrelated variables make that term zero but need not be independent.

### Definition and conditions

Finite second moments are required; correlation also requires both standard deviations to be positive.

$$
\operatorname{Cov}(X,Y)=E[XY]-EX\,EY,\quad\rho=\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y},\quad\operatorname{Var}(X+Y)=\sigma_X^2+\sigma_Y^2+2\operatorname{Cov}(X,Y)
$$

- Finite second moments are required; correlation also requires both standard deviations to be positive.
- Independence implies zero covariance when these moments exist; the converse generally fails.

### Derivation

Expand the product of centered variables.

$$
E[(X-EX)(Y-EY)]=E[XY]-EX\,EY
$$

Apply Cauchy–Schwarz to bound the covariance.

$$
|\operatorname{Cov}(X,Y)|\le\sigma_X\sigma_Y
$$

Expand the squared deviation of the sum.

$$
\operatorname{Var}(X+Y)=\sigma_X^2+\sigma_Y^2+2\operatorname{Cov}(X,Y)
$$

### Interactive diagram

Change correlation from negative to positive. How do the scatterplot and variance of the sum change?

The fixed standardized point cloud is constructed to have the chosen correlation; finite points do not prove a population property.

Online diagram: #/lesson/ps-covariance?view=visual

### Guided experiment

1. **Specified correlation: 0.5** Set the specified correlation to $0.5$ and compare the diagram and readings.

Preset observation: At this preset: specified population correlation $0.5$; common marginal variance $1$; variance of the sum $3$.

2. **Specified correlation: -0.95** Set the specified correlation to $-0.95$ and compare the diagram and readings.

Preset observation: At this preset: specified population correlation $-0.95$; common marginal variance $1$; variance of the sum $0.1$.

3. **Specified correlation: 0.95** Set the specified correlation to $0.95$ and compare the diagram and readings.

Preset observation: At this preset: specified population correlation $0.95$; common marginal variance $1$; variance of the sum $3.9$.

### Worked examples

#### Example 1: Rescale correlation

Standard deviations are two and three, with correlation one half. Find the covariance.

- Multiply correlation by both standard deviations.
- $0.5(2)(3)=3$.

**Answer: $3$.**

#### Example 2: Uncorrelated but dependent

$X$ takes $-1,0,1$ with equal probabilities and $Y=X^2$. Are they independent?

- $EX=EXY=0$, so covariance is zero.
- Given $X=0$, $Y=0$ is determined, so independence fails.

**Answer: Uncorrelated, but not independent.**

### Common mistakes

- **Zero correlation means independence** Strong nonlinear dependence can remain.

- **Correlation carries the original units** Correlation is dimensionless. Covariance has the product of the two variables' units.

### Exercises and solutions

**1. Variances are four and nine and covariance is three. Find the variance of the sum.**

Hint: Keep the cross term.

Answer: $19$.

- $4+9+2(3)=19$.

**2. Does adding ten to one variable change the correlation?**

Hint: Centering cancels a shift.

Answer: No.

- Standard deviations and centered deviations are unchanged.

**3. Can correlation be defined by the usual formula when one variable is constant?**

Hint: Check the denominator.

Answer: No.

- That variable has standard deviation zero.

**4. Does correlation minus one indicate independence?**

Hint: It describes a nondegenerate exact linear relationship.

Answer: No.

- One variable is determined by a decreasing line in the other.

Prerequisites: Independent variables and product distributions.

## 6.5 Conditional expectation and total variance

*Calculate within groups, then include differences between groups.*

### The idea

Calculate within groups, then include differences between groups.

### Intuition

Overall variation includes both variation within groups and variation in their means.

### Another explanation

Add the variance of conditional group means as well.

### Quick check

What remains after subtracting average within-group variance from total variance?

A. Zero
B. Variance of the group means
C. The overall mean

Answer: B. Differences in group locations also contribute to overall variation.

### Conditional means are functions

Different conditioning values can give different conditional means. The conditional mean itself varies with the conditioning variable.

### Use the tower property

Taking the overall expectation of a conditional mean recovers the original mean. Weight each group by its probability.

### Decompose total variance

Split a deviation into a within-group deviation and a group-mean deviation. The cross term has conditional expectation zero, giving the law of total variance.

### Definition and conditions

Total expectation requires integrability; total variance requires a finite second moment.

$$
E[Y]=E[E(Y\mid X)],\qquad\operatorname{Var}(Y)=E[\operatorname{Var}(Y\mid X)]+\operatorname{Var}(E[Y\mid X])
$$

- Total expectation requires integrability; total variance requires a finite second moment.
- Group weights must match the population composition.

### Derivation

Write the conditional mean as $m(X)$ and split the total deviation.

$$
Y-EY=(Y-m(X))+(m(X)-EY)
$$

The within-group deviation has conditional mean zero.

$$
E[Y-m(X)\mid X]=0
$$

Square and take expectations; the cross term vanishes.

$$
\operatorname{Var}(Y)=E[\operatorname{Var}(Y\mid X)]+\operatorname{Var}(m(X))
$$

### Interactive diagram

Move the group means farther apart while keeping within-group variance fixed. What happens to total variance?

Compare the two group distributions and the within/between decomposition of total variance.

Online diagram: #/lesson/ps-conditional-expectation?view=visual

### Guided experiment

1. **Distance between group centers: 4** Set the distance between group centers to $4$ and compare the diagram and readings.

Preset observation: At this preset: overall mean $0$; average within-group variance $1$; between-group variance $4$; total variance $5$.

2. **Distance between group centers: 0** Set the distance between group centers to $0$ and compare the diagram and readings.

Preset observation: At this preset: overall mean $0$; average within-group variance $1$; between-group variance $0$; total variance $1$.

3. **Distance between group centers: 8** Set the distance between group centers to $8$ and compare the diagram and readings.

Preset observation: At this preset: overall mean $0$; average within-group variance $1$; between-group variance $16$; total variance $17$.

### Worked examples

#### Example 1: A mixture's mean

Two equally likely groups have conditional means zero and four. Find the overall mean.

- Weight by the two group probabilities.
- $0.5(0)+0.5(4)=2$.

**Answer: $2$.**

#### Example 2: A mixture's variance

In the preceding example, both within-group variances are one. Find the overall variance.

- The average within-group variance is one.
- The group means have variance four around the overall mean two.

**Answer: $1+4=5$.**

### Common mistakes

- **Total variance is only average within-group variance** Add the variance of conditional group means as well.

- **Conditional expectation is always a fixed number** It is generally a random variable depending on the conditioning variable.

### Exercises and solutions

**1. Two groups have probabilities $0.25,0.75$ and means two and six. Find the overall mean.**

Hint: Weight the group means.

Answer: $5$.

- $0.25(2)+0.75(6)=5$.

**2. If all conditional means are equal, what is the between-group variance?**

Hint: Use the variance of a constant.

Answer: $0$.

- Zero.

**3. If all within-group variances are zero, must overall variance be zero?**

Hint: Group means can still differ.

Answer: Not necessarily.

- Between-group variance may remain positive.

**4. If two populations match within each group, must their overall means match?**

Hint: Are their group weights the same?

Answer: No.

- Different weights can produce different mixture means.

Prerequisites: Covariance, correlation, and variance of a sum.

## Chapter review

Try independently before reading the solutions.

**1. Two equally weighted groups have means one and five and within-group variances two. Find the overall mean and variance.**

Hint: Use total expectation and total variance.

Answer: Mean $3$; variance $6$.

- The overall mean is three.
- The variance of the group means is four; add the average within-group variance of two.

**2. Two variables have standard deviations one and two and correlation $-0.5$. Find the variance of their sum.**

Hint: First recover the covariance.

Answer: $3$.

- The covariance is minus one.
- The variance of the sum is $1+4-2=3$.

# Chapter 7 · From Populations to Samples

Larger samples improve precision but do not automatically remove bias.

Goals:
- Distinguish the law of large numbers from the central limit theorem
- Calculate standard errors
- Use normal-sample theory and the bootstrap

## 7.1 The law of large numbers and relative frequency

*Averaging independent repetitions stabilizes random fluctuations.*

### The idea

Averaging independent repetitions stabilizes random fluctuations.

### Intuition

A frequency approaching probability does not mean the next result compensates for earlier deviations.

### Another explanation

Independent trials have no next-trial compensation mechanism.

### Quick check

Must a finite average get closer to expectation at every step?

A. Yes
B. No
C. Only for a fair coin

Answer: B. The law describes the overall behavior of error probabilities as sample size increases.

### Identify what converges

The weak law says a sample mean approaches its expectation in probability. It does not require every finite path to approach monotonically.

### Bound error probabilities

For independent identically distributed observations with finite variance, the sample mean's variance is population variance divided by sample size. Chebyshev bounds deviation probabilities.

### Respect the assumptions

Independent identical sampling is sufficient here. Selection bias, strong dependence, and heavy tails without a finite mean prevent direct use of this version.

### Definition and conditions

This proof assumes independent identically distributed observations, finite variance, and fixed $\varepsilon>0$.

$$
P(|\bar X_n-\mu|\ge\varepsilon)\le\frac{\sigma^2}{n\varepsilon^2}\longrightarrow0
$$

- This proof assumes independent identically distributed observations, finite variance, and fixed $\varepsilon>0$.
- More general laws require their own assumptions. No finite sample is promised to match the expectation exactly.

### Derivation

Use linearity to find the mean.

$$
E\bar X_n=\mu
$$

Independence reduces the variance of the average.

$$
\operatorname{Var}(\bar X_n)=\sigma^2/n
$$

Apply Chebyshev to the average.

$$
P(|\bar X_n-\mu|\ge\varepsilon)\le\sigma^2/(n\varepsilon^2)
$$

### Interactive diagram

As one sampling path grows, must its error decrease at each step?

A seeded Bernoulli path displays frequency fluctuations separately from the theoretical probability line.

Online diagram: #/lesson/ps-lln?view=visual

### Guided experiment

1. **Cumulative trials: 200** Set cumulative trials to $200$ and compare the diagram and readings.

Preset observation: At this preset: successes $87$; cumulative frequency $0.435$; absolute error $0.065$; theoretical frequency standard deviation $0.0353553$.

2. **Cumulative trials: 10** Set cumulative trials to $10$ and compare the diagram and readings.

Preset observation: At this preset: successes $5$; cumulative frequency $0.5$; absolute error $0$; theoretical frequency standard deviation $0.158114$.

3. **Cumulative trials: 1000** Set cumulative trials to $1000$ and compare the diagram and readings.

Preset observation: At this preset: successes $460$; cumulative frequency $0.46$; absolute error $0.04$; theoretical frequency standard deviation $0.0158114$.

### Worked examples

#### Example 1: A frequency error bound

Observe 400 independent trials with success probability one half. Bound the probability that frequency differs from one half by at least $0.1$.

- Bernoulli variance is one quarter.
- Substitute into $0.25/(400\times0.01)$.

**Answer: At most $0.0625$.**

#### Example 2: Convergence need not be monotone

If the current frequency exactly equals the true probability, can the next trial move it away?

- The next trial can still succeed or fail.
- A finite average can deviate again.

**Answer: Yes. Convergence does not require the error to shrink at every step.**

### Common mistakes

- **Long-run regularity compensates on the next trial** Independent trials have no next-trial compensation mechanism.

- **More records always mean more independent information** Copying dependent records does not create independent observations.

### Exercises and solutions

**1. Population variance is nine and the independent sample size is 100. Find the mean's variance.**

Hint: Divide by sample size.

Answer: $0.09$.

- $9/100=0.09$.

**2. If sample size quadruples, by what factor does the sample mean's variance change?**

Hint: Use inverse proportionality.

Answer: A factor of $1/4$.

- It becomes one quarter as large.

**3. After ten consecutive failures, does the law require the next trial to succeed?**

Hint: Distinguish a long-run average from the next conditional probability.

Answer: No.

- In independent trials, the next success probability is unchanged.

**4. Can the independent-sample law be used after recording the same random value 1,000 times?**

Hint: The records are perfectly dependent.

Answer: No.

- Their average is still the original random value.

Prerequisites: Markov and Chebyshev probability bounds, Independence, disjointness, and repeated trials.

## 7.2 The central limit theorem

*Sums of many independent contributions approach normality after standardization.*

### The idea

Sums of many independent contributions approach normality after standardization.

### Intuition

The original data need not be bell-shaped. The distribution here comes from repeating the sampling and calculating a mean each time.

### Another explanation

It describes statistics such as standardized means.

### Quick check

Which distribution does this CLT mainly describe as approaching normality?

A. The original population
B. Standardized means from repeated samples
C. Any small set of data

Answer: B. Distinguish the population, one sample, and a statistic's sampling distribution.

### Identify the sampling distribution

A histogram of one sample and a histogram of means from many samples describe different objects.

### Standardize correctly

For independent identically distributed variables with finite positive variance, centering the sample mean and scaling by its population standard error gives convergence in distribution to a standard normal.

### Judge approximation limits

Skewness, heavy tails, rare events, and tail-probability questions can require larger samples. There is no universal guarantee that thirty observations suffice.

### Definition and conditions

The classical version here assumes independent identically distributed variables and $0<\sigma^2<\infty$.

$$
\frac{\sqrt n(\bar X_n-\mu)}{\sigma}\xrightarrow{d}N(0,1)
$$

- The classical version here assumes independent identically distributed variables and $0<\sigma^2<\infty$.
- Convergence in distribution does not make every finite-sample distribution exactly normal.

### Derivation

Averaging leaves the center unchanged.

$$
E\bar X_n=\mu
$$

The scale of the average shrinks with sample size.

$$
\operatorname{SD}(\bar X_n)=\sigma/\sqrt n
$$

Center and divide by that scale to obtain a nondegenerate limit.

$$
Z_n=\sqrt n(\bar X_n-\mu)/\sigma\xrightarrow dN(0,1)
$$

### Interactive diagram

Increase the size of each sample. How does the repeated-sampling distribution of standardized means change?

Seeded repeated Bernoulli samples produce standardized means. The histogram is a finite simulation; the curve is a normal reference.

Online diagram: #/lesson/ps-clt?view=visual

### Guided experiment

1. **Observations per sample: 20** Set observations per sample to $20$ and compare the diagram and readings.

Preset observation: At this preset: sample size $20$; repetitions $300$; simulated mean $0.0048795$; fraction outside the window $0$.

2. **Observations per sample: 1** Set observations per sample to $1$ and compare the diagram and readings.

Preset observation: At this preset: sample size $1$; repetitions $300$; simulated mean $-0.0436436$; fraction outside the window $0$.

3. **Observations per sample: 80** Set observations per sample to $80$ and compare the diagram and readings.

Preset observation: At this preset: sample size $80$; repetitions $300$; simulated mean $0.0439155$; fraction outside the window $0$.

### Worked examples

#### Example 1: Approximate a mean probability

An independent sample comes from a population with mean ten and standard deviation six. For sample size 36, approximate $P(\bar X>12)$.

- The standard error is one.
- The standardized threshold is two.

**Answer: If the normal approximation applies, approximately $1-\Phi(2)=0.0228$.**

#### Example 2: How this differs from the law of large numbers

If the mean approaches its expectation, why does the standardized mean still fluctuate?

- The unscaled mean's fluctuations shrink.
- Multiplication by the square root of sample size reveals the shape of those shrinking fluctuations.

**Answer: The two theorems concern different scales.**

### Common mistakes

- **The CLT makes raw data normal** It describes statistics such as standardized means.

- **Thirty observations guarantee accuracy** Skewness, tails, and accuracy requirements all affect the sample size needed.

### Exercises and solutions

**1. Population standard deviation is ten and sample size is 25. Find the mean's standard error.**

Hint: Divide by the square root of sample size.

Answer: $2$.

- $10/5=2$.

**2. Does increasing sample size turn the original population normal?**

Hint: Identify the object that converges.

Answer: No.

- The sampling distribution of a statistic, such as the mean, changes.

**3. Can independent Cauchy observations use this finite-variance CLT?**

Hint: Check the moment assumptions.

Answer: No.

- The population does not have finite variance.

**4. Do thirty observations always suffice for a highly skewed population?**

Hint: Consider the tails and required accuracy.

Answer: No guarantee.

- No sample-size cutoff works universally.

Prerequisites: The law of large numbers and relative frequency, Normal distributions and standardization.

## 7.3 Sample means and standard errors

*Standard deviation describes individual spread; standard error describes an estimator's variability.*

### The idea

Standard deviation describes individual spread; standard error describes an estimator's variability.

### Intuition

Averaging cancels some independent fluctuations, but it does not eliminate differences between individuals.

### Another explanation

State whether you are describing individuals or a statistic.

### Quick check

Must the population standard deviation of individuals shrink when sample size increases?

A. Yes
B. No; the mean's standard error shrinks under the stated conditions
C. It becomes zero

Answer: B. Individual variation and estimation precision are different quantities.

### Identify the statistic

A sample mean is a function of the data. It changes from sample to sample and has its own distribution.

### Find the mean's standard error

For independent identically distributed observations with finite variance, the mean's variance is population variance divided by sample size. When population standard deviation is unknown, estimate it with sample standard deviation.

### Distinguish exact from approximate

A normal population gives an exactly normal sample mean at every sample size. Other populations need an approximation such as the CLT; an algebraic standard-error formula alone does not establish normality.

### Definition and conditions

This lesson assumes independent identically distributed observations.

$$
E\bar X=\mu,\quad\operatorname{SE}(\bar X)=\sigma/\sqrt n,\quad\widehat{\operatorname{SE}}=s/\sqrt n
$$

- This lesson assumes independent identically distributed observations.
- Sampling a large fraction of a finite population without replacement needs a finite-population correction.

### Derivation

Write the sample mean as a scaled sum.

$$
\bar X=n^{-1}\sum_iX_i
$$

Independence makes variances of the sum add.

$$
\operatorname{Var}(\bar X)=n^{-2}\sum_i\sigma^2=\sigma^2/n
$$

Take the square root to find the statistic's scale.

$$
\operatorname{SE}(\bar X)=\sigma/\sqrt n
$$

### Interactive diagram

If sample size quadruples, how much does the sampling-distribution width shrink?

The model uses the exact sample-mean distribution for a known normal population, labeling individual standard deviation and the mean's standard error separately.

Online diagram: #/lesson/ps-sampling-mean?view=visual

### Guided experiment

1. **Sample size: 25** Set sample size to $25$ and compare the diagram and readings.

Preset observation: At this preset: individual standard deviation $2$; mean standard error $0.4$; sampling-distribution center $2$.

2. **Sample size: 1** Set sample size to $1$ and compare the diagram and readings.

Preset observation: At this preset: individual standard deviation $2$; mean standard error $2$; sampling-distribution center $2$.

3. **Sample size: 100** Set sample size to $100$ and compare the diagram and readings.

Preset observation: At this preset: individual standard deviation $2$; mean standard error $0.2$; sampling-distribution center $2$.

### Worked examples

#### Example 1: Two different scales

Individual standard deviation is twelve and independent sample size is 36. Find the mean's standard error.

- The individual scale remains twelve.
- The mean's scale is $12/6$.

**Answer: $2$.**

#### Example 2: The cost of precision

How must sample size change to halve standard error?

- Standard error scales inversely with the square root of sample size.
- Multiply sample size by four.

**Answer: Quadruple it.**

### Common mistakes

- **Standard deviation and standard error are interchangeable** State whether you are describing individuals or a statistic.

- **The independent-sample formula works for every sample** Dependence, design weights, and finite populations can change the variance.

### Exercises and solutions

**1. For $s=8,n=16$, estimate the standard error.**

Hint: Divide the standard deviation by four.

Answer: $2$.

- $8/4=2$.

**2. Is standard error the sample standard deviation of the raw data?**

Hint: They describe different objects.

Answer: No.

- One describes a mean, the other individuals.

**3. If sample size increases from ten to forty, by what factor does standard error change?**

Hint: Take the inverse square root of the sample-size ratio.

Answer: A factor of $1/2$.

- $\sqrt{10/40}=1/2$.

**4. What happens if repeated measurements on the same object are positively correlated but an independent-sample standard error is used?**

Hint: Positive covariance terms are omitted.

Answer: Uncertainty may be underestimated.

- The actual variance of the average can be larger.

Prerequisites: The central limit theorem.

## 7.4 Normal samples, chi-square, and $t$ distributions

*Replacing an unknown population scale with a sample standard deviation adds uncertainty.*

### The idea

Replacing an unknown population scale with a sample standard deviation adds uncertainty.

### Intuition

Small samples estimate scale less reliably, so the $t$ distribution has heavier tails than the standard normal.

### Another explanation

For normal samples, use the $t$ distribution.

### Quick check

How do small-degrees-of-freedom $t$ curves compare with the standard normal?

A. Heavier tails
B. Greater total area
C. Smaller total area

Answer: A. Both are normalized, but small-degrees-of-freedom $t$ distributions assign more probability to the tails.

### Correct the sample variance

Estimating the sample mean imposes one linear constraint. The expected sum of squared deviations equals degrees of freedom times population variance.

### Use normal-sample theory

For an independent normal sample, the mean and sample variance are independent, and the standardized sum of squared deviations is chi-square. These exact facts do not hold for arbitrary populations.

### Construct a $t$ statistic

Divide a standard normal by an independent chi-square scale estimate to obtain a $t$ distribution. Extra scale uncertainty decreases as degrees of freedom increase.

### Definition and conditions

Assume independent normal observations, $n\ge2$, and $\sigma>0$.

$$
\frac{(n-1)S^2}{\sigma^2}\sim\chi^2_{n-1},\qquad\frac{\bar X-\mu}{S/\sqrt n}\sim t_{n-1}
$$

- Assume independent normal observations, $n\ge2$, and $\sigma>0$.
- Large nonnormal samples may support approximations under suitable conditions; those are not the exact results above.

### Derivation

The sums of squares about the true and sample means differ by one term.

$$
\sum_i(X_i-\bar X)^2=\sum_i(X_i-\mu)^2-n(\bar X-\mu)^2
$$

Take expectations to obtain the degrees-of-freedom correction.

$$
E\sum_i(X_i-\bar X)^2=(n-1)\sigma^2
$$

For normal samples, replace the true standard deviation with the independent chi-square scale estimate.

$$
T=Z/\sqrt{V/(n-1)}\sim t_{n-1}
$$

### Interactive diagram

Increase degrees of freedom. How does the $t$ curve approach the standard normal?

Compare two normalized densities and calculate their two-sided tail probabilities at the same threshold.

Online diagram: #/lesson/ps-normal-sample?view=visual

### Guided experiment

1. **$t$ degrees of freedom: 5** Set $t$ degrees of freedom to $5$ and compare the diagram and readings.

Preset observation: At this preset: $t$ degrees of freedom $5$; $t$ two-sided tail probability $0.101939$; normal two-sided tail probability $0.0455003$.

2. **$t$ degrees of freedom: 1** Set $t$ degrees of freedom to $1$ and compare the diagram and readings.

Preset observation: At this preset: $t$ degrees of freedom $1$; $t$ two-sided tail probability $0.295167$; normal two-sided tail probability $0.0455003$.

3. **$t$ degrees of freedom: 60** Set $t$ degrees of freedom to $60$ and compare the diagram and readings.

Preset observation: At this preset: $t$ degrees of freedom $60$; $t$ two-sided tail probability $0.050033$; normal two-sided tail probability $0.0455003$.

### Worked examples

#### Example 1: Degrees of freedom

For ten independent normal observations, how many degrees of freedom does the mean's $t$ statistic have?

- Estimate the center with the sample mean.
- Subtract one from sample size.

**Answer: $9$.**

#### Example 2: Calculate $t$

For $n=9,\bar x=5,s=3$ and hypothesized center four, find the $t$ statistic.

- The estimated standard error is one.
- Divide the difference of one by the standard error.

**Answer: $t=1$, with $8$ degrees of freedom.**

### Common mistakes

- **Replacing population scale with sample scale leaves exact normality** For normal samples, use the $t$ distribution.

- **Degrees of freedom are merely a label** They control scale-estimation uncertainty and tail shape.

### Exercises and solutions

**1. For six observations, what are the degrees of freedom of the chi-square squared-deviation sum?**

Hint: Subtract one from sample size.

Answer: $5$.

- $6-1=5$.

**2. Does a $t$ statistic use the known population standard deviation in its denominator?**

Hint: Distinguish $z$ from $t$.

Answer: No.

- It uses the sample standard deviation.

**3. Does a small-sample $t$ statistic from every nonnormal population have an exact $t$ distribution?**

Hint: Check the exact theory's assumptions.

Answer: Not necessarily.

- The normal-population condition is missing.

**4. What distribution does $t$ approach as its degrees of freedom increase?**

Hint: The scale estimate becomes more stable.

Answer: $N(0,1)$.

- The standard normal.

Prerequisites: Sample means and standard errors, Variance, standard deviation, and covariance terms.

## 7.5 Bootstrap: resampling from a sample

*Treat observed data as an empirical population and repeatedly sample with replacement.*

### The idea

Treat observed data as an empirical population and repeatedly sample with replacement.

### Intuition

Keep each resample the same size; change which records are selected and how often.

### Another explanation

The original sampling design and statistic's assumptions still matter.

### Quick check

What does sampling with replacement mean in the ordinary bootstrap?

A. Original records are deleted
B. A record can be selected repeatedly
C. Every resample grows larger

Answer: B. Resample size stays fixed; records can repeat.

### Build the empirical distribution

The ordinary nonparametric bootstrap weights each record equally. Draw the original sample size with replacement, then calculate the statistic.

### Estimate a statistic's variability

The standard deviation of repeated statistics estimates standard error. This volume illustrates percentile intervals using quantiles of the resampled statistics.

### Check applicability

Independent sampling is a common starting point. Time series, clusters, strong bias, and some nonsmooth statistics need specialized methods. More repetitions cannot repair an unrepresentative original sample.

### Definition and conditions

The ordinary bootstrap approximates the population with the empirical distribution and resamples at the original sample size.

$$
X_1^*,\ldots,X_n^*\stackrel{\mathrm{iid}}\sim\hat F_n,\qquad\widehat{\operatorname{SE}}_{\mathrm{boot}}=\operatorname{SD}(\hat\theta_1^*,\ldots,\hat\theta_B^*)
$$

- The ordinary bootstrap approximates the population with the empirical distribution and resamples at the original sample size.
- Percentile intervals do not guarantee accurate coverage for arbitrary small samples.

### Derivation

Assign equal probability mass to each original record.

$$
\hat F_n=\frac1n\sum_i\delta_{x_i}
$$

Sample repeatedly from this empirical distribution.

$$
\hat\theta_b^*=T(X_{b1}^*,\ldots,X_{bn}^*)
$$

Calculate spread or quantiles of the repeated statistic.

$$
I_{\mathrm{perc}}=[q_{\alpha/2}^*,q_{1-\alpha/2}^*]
$$

### Interactive diagram

Change the repetition count and one extreme observation. How does the bootstrap interval change?

A seeded small-sample resampling illustrates the method only. Its interval is not claimed to achieve nominal coverage.

Online diagram: #/lesson/ps-bootstrap?view=visual

### Guided experiment

1. **Resamples: 200** Set the resample count to $200$ and compare the diagram and readings.

Preset observation: At this preset: original sample mean $3$; bootstrap standard error $0.83684$; lower percentile endpoint $1.6$; upper percentile endpoint $4.8$.

2. **Resamples: 50** Set the resample count to $50$ and compare the diagram and readings.

Preset observation: At this preset: original sample mean $3$; bootstrap standard error $0.887546$; lower percentile endpoint $1.8$; upper percentile endpoint $5.11$.

3. **Resamples: 400** Set the resample count to $400$ and compare the diagram and readings.

Preset observation: At this preset: original sample mean $3$; bootstrap standard error $0.792683$; lower percentile endpoint $1.6$; upper percentile endpoint $4.8$.

### Worked examples

#### Example 1: Repeated records are allowed

The original data are $1,2,5$. Is the bootstrap sample $(2,2,5)$ allowed?

- Draw three times with replacement.
- The same record may appear more than once.

**Answer: Yes; its mean is $3$.**

#### Example 2: What stays fixed?

The original sample has twenty records. With 1,000 ordinary bootstrap repetitions, how many records are in each resample?

- The 1,000 counts repetitions.
- Each resample still contains twenty records.

**Answer: Twenty per resample.**

### Common mistakes

- **Enough repetitions always make bootstrap valid** The original sampling design and statistic's assumptions still matter.

- **Percentile intervals are always exact confidence intervals** Their coverage is generally approximate and can be poor in some settings.

### Exercises and solutions

**1. For original data $2,4$, how many equally likely ordered bootstrap samples of size two exist?**

Hint: Each position independently has two choices.

Answer: $4$.

- $2^2=4$.

**2. For original data $2,4$, list the means of all four ordered bootstrap samples of size two.**

Hint: List both draws.

Answer: $2,3,3,4$.

- $(2,2),(2,4),(4,2),(4,4)$.

**3. Can one million resamples correct selection bias in the original data?**

Hint: Which data are repeatedly sampled?

Answer: Not automatically.

- The same biased sample is reused.

**4. Is independent row-by-row resampling always appropriate for a time series?**

Hint: The records may be dependent.

Answer: Not always; a block bootstrap or another method may be needed.

- It can destroy temporal dependence.

Prerequisites: Normal samples, chi-square, and $t$ distributions.

## Chapter review

Try independently before reading the solutions.

**1. Take sixty-four independent observations from a population with mean six and standard deviation eight. What is the standard error of the mean? If the CLT approximation applies, what is the approximate probability that the mean exceeds eight?**

Hint: Use the distribution of the sample mean, not the distribution of individual observations.

Answer: Standard error $1$; probability approximately $0.0228$.

- The standard error is one.
- The standardized threshold is two.

**2. An original sample has five records. An ordinary bootstrap uses four hundred repetitions. How many resamples are generated, and how many records are in each? Does this guarantee correction of representativeness bias?**

Hint: Distinguish the original sample size from the number of repetitions.

Answer: Four hundred resamples of five records each; correction of bias is not guaranteed.

- Four hundred resamples are generated, each containing five records drawn with replacement.
- Resampling still uses the original empirical distribution; selection bias does not automatically disappear.

# Chapter 8 · Estimation and Confidence Intervals

Choose an estimator, then use its sampling distribution to construct an interval.

Goals:
- Calculate bias and mean squared error
- Use the method of moments and maximum likelihood
- Construct intervals for means, proportions, and differences

## 8.1 Bias, consistency, and mean squared error

*An estimator can have systematic error as well as large sample-to-sample fluctuations.*

### The idea

An estimator can have systematic error as well as large sample-to-sample fluctuations.

### Intuition

A slightly biased estimate with lower variability can have smaller average squared error.

### Another explanation

It constrains only the repeated-sampling average.

### Quick check

What equals MSE?

A. Variance plus bias
B. Variance plus squared bias
C. Standard deviation plus mean

Answer: B. Squared loss counts systematic deviation through its square.

### Define bias over repeated samples

Bias is the estimator's expectation minus its target parameter. It is not the error in one observed sample.

### Decompose mean squared error

Average squared error equals variance plus squared bias. Unbiasedness removes only one component.

### Separate unbiasedness from consistency

Unbiasedness is a finite-sample expectation property. Consistency is convergence as sample size tends to infinity. Neither concept can simply replace the other.

### Definition and conditions

This lesson assumes integrable squared error.

$$
\operatorname{MSE}(\hat\theta)=E[(\hat\theta-\theta)^2]=\operatorname{Var}(\hat\theta)+\operatorname{Bias}(\hat\theta)^2
$$

- This lesson assumes integrable squared error.
- An estimator comparison must specify the target, loss, and sampling model.

### Derivation

Add and subtract the estimator's expectation inside the error.

$$
\hat\theta-\theta=(\hat\theta-E\hat\theta)+(E\hat\theta-\theta)
$$

Expand the square; the centered cross term has expectation zero.

$$
E[\hat\theta-E\hat\theta]=0
$$

Variance and squared bias remain.

$$
\mathrm{MSE}=\mathrm{Var}+\mathrm{Bias}^2
$$

### Interactive diagram

Move the estimator distribution's center and change its width. How do bias and MSE compare?

A known target and normal estimator model separate MSE into components, with bias and standard deviation labeled distinctly.

Online diagram: #/lesson/ps-bias-mse?view=visual

### Guided experiment

1. **Estimator bias: 1** Set estimator bias to $1$ and compare the diagram and readings.

Preset observation: At this preset: bias $1$; variance $1$; mean squared error $2$.

2. **Estimator bias: -3** Set estimator bias to $-3$ and compare the diagram and readings.

Preset observation: At this preset: bias $-3$; variance $1$; mean squared error $10$.

3. **Estimator bias: 3** Set estimator bias to $3$ and compare the diagram and readings.

Preset observation: At this preset: bias $3$; variance $1$; mean squared error $10$.

### Worked examples

#### Example 1: Compare errors

Estimator A is unbiased with variance four. B has bias one and variance two. Which has smaller MSE?

- A has MSE four.
- B has $2+1=3$.

**Answer: B has the smaller MSE.**

#### Example 2: A biased variance estimate

If the sum of squared deviations is divided by $n$ instead of $n-1$, what is its expectation?

- The squared-deviation sum has expectation $(n-1)\sigma^2$.
- Divide by $n$.

**Answer: $(n-1)\sigma^2/n$, biased downward.**

### Common mistakes

- **Unbiased means accurate every time** It constrains only the repeated-sampling average.

- **Biased estimators are never useful** Also compare variance, MSE, and the task's objective.

### Exercises and solutions

**1. Find MSE for bias two and variance three.**

Hint: Square the bias.

Answer: $7$.

- $3+4=7$.

**2. Can zero error in one estimate prove unbiasedness?**

Hint: Bias uses the repeated-sampling expectation.

Answer: No.

- One realization cannot determine an expectation.

**3. Must an unbiased estimator have lower MSE than every biased estimator?**

Hint: Compare both components.

Answer: Not necessarily.

- A biased estimator may greatly reduce variance.

**4. How does the bias of the normal variance MLE with denominator $n$ change as sample size grows?**

Hint: Inspect $(n-1)/n$.

Answer: Bias tends to zero; the estimate is also consistent under appropriate conditions.

- This factor tends to one.

Prerequisites: Bootstrap: resampling from a sample.

## 8.2 Method of moments and maximum likelihood

*To connect model parameters with data, first specify the sampling model.*

### The idea

To connect model parameters with data, first specify the sampling model.

### Intuition

Method of moments matches average features. Maximum likelihood finds parameter values that make the observed data most likely under the model.

### Another explanation

A posterior also needs a prior and normalization.

### Quick check

What is held fixed when maximizing likelihood?

A. The data
B. The parameters
C. Both are resampled randomly

Answer: A. Likelihood is a function of parameters for the given data.

### Match moments

Replace population moments with sample moments and solve the parameter equations. Check the parameter range and uniqueness of the solution.

### Construct a likelihood

Treat the independent sample's joint mass or density as a function of parameters. Data stay fixed while parameters vary. This is not automatically a normalized probability distribution over parameters.

### Check interior points and boundaries

Logarithms simplify products, but differentiation finds only interior candidates. Zero successes, all successes, and other boundaries need separate comparison.

### Definition and conditions

Specify the parameter space, independence assumptions, and probability-mass or density model.

$$
L(\theta;x)=\prod_{i=1}^nf_\theta(x_i),\qquad\hat\theta_{\mathrm{MLE}}\in\arg\max_\theta L(\theta;x)
$$

- Specify the parameter space, independence assumptions, and probability-mass or density model.
- A maximum can be nonunique or fail to exist. A zero derivative alone does not settle the problem.

### Derivation

Summarize Bernoulli observations by the success count.

$$
L(p)\propto p^k(1-p)^{n-k}
$$

At interior points, take logarithms and differentiate.

$$
\ell\prime(p)=k/p-(n-k)/(1-p)
$$

Solve for the sample proportion, then include zero-success and all-success boundaries.

$$
\hat p=k/n\in[0,1]
$$

### Interactive diagram

Change the success count. How does the likelihood peak move?

For a fixed trial count, compare relative likelihoods and the MLE. The curve is not presented as a posterior parameter density.

Online diagram: #/lesson/ps-estimation?view=visual

### Guided experiment

1. **Observed successes: 6** Set observed successes to $6$ and compare the diagram and readings.

Preset observation: At this preset: successes $6$; trials $20$; maximum likelihood estimate $0.3$.

2. **Observed successes: 0** Set observed successes to $0$ and compare the diagram and readings.

Preset observation: At this preset: successes $0$; trials $20$; maximum likelihood estimate $0$.

3. **Observed successes: 10** Set observed successes to $10$ and compare the diagram and readings.

Preset observation: At this preset: successes $10$; trials $20$; maximum likelihood estimate $0.5$.

### Worked examples

#### Example 1: Estimate a success probability

There are six successes in twenty independent Bernoulli trials. Find the MLE.

- The likelihood is a constant times $p^6(1-p)^{14}$.
- Its maximum occurs at the sample success proportion.

**Answer: $0.3$.**

#### Example 2: An exponential rate

Four independent exponential waiting times total eight. Find the rate MLE.

- The log-likelihood is $4\log\lambda-8\lambda$.
- Set its derivative to zero and check the second derivative is negative.

**Answer: $\hat\lambda=4/8=0.5$.**

### Common mistakes

- **Likelihood is the parameter's posterior probability** A posterior also needs a prior and normalization.

- **A zero derivative guarantees a global maximum** Check curvature, boundaries, and all other candidates.

### Exercises and solutions

**1. Ten Bernoulli trials all fail. Find the MLE in parameter space $[0,1]$.**

Hint: Compare boundaries.

Answer: $0$.

- The likelihood $(1-p)^{10}$ decreases with the parameter.

**2. A Poisson sample has mean three. Find the parameter MLE.**

Hint: Match the Poisson mean count.

Answer: $3$.

- Differentiating the log-likelihood gives the sample mean.

**3. Must the area under a likelihood curve be one?**

Hint: What kind of function of the parameter is it?

Answer: Not necessarily.

- It is not an automatically normalized parameter density.

**4. When a normal mean is unknown, what denominator appears in the variance MLE?**

Hint: MLE and unbiased estimation differ.

Answer: $n$.

- Maximizing likelihood divides the squared-deviation sum by sample size.

Prerequisites: Bias, consistency, and mean squared error.

## 8.3 Confidence intervals for a mean and coverage

*Confidence level describes a method's long-run coverage, not a posterior probability for an observed interval.*

### The idea

Confidence level describes a method's long-run coverage, not a posterior probability for an observed interval.

### Intuition

Repeated samples produce different intervals. A specified fraction of them cover the same true mean.

### Another explanation

Frequentist coverage is a sampling property of the interval-generating procedure.

### Quick check

What is usually held fixed in a coverage experiment?

A. The true parameter
B. Every interval's endpoints
C. Each sample mean

Answer: A. The repeated objects are the samples and their intervals.

### Start with a pivot

For a normal sample with unknown variance, the mean's $t$ statistic has a distribution free of unknown parameters. Solve its central probability statement for a random interval.

### Choose $z$ or $t$

Use $z$ when population standard deviation is genuinely known; use the sample standard deviation and $t$ when it is unknown. Nonnormal settings require a separate assessment of approximation conditions.

### Interpret coverage correctly

Before sampling, a random interval covers the fixed parameter with a specified probability. After observation the interval is fixed; frequentist confidence is not a posterior probability for the parameter.

### Definition and conditions

An exact $t$ interval requires independent normal observations and $n\ge2$.

$$
\bar X\pm t_{1-\alpha/2,n-1}\frac{S}{\sqrt n}
$$

- An exact $t$ interval requires independent normal observations and $n\ge2$.
- For a normal model with known scale, replace the margin by $z_{1-\alpha/2}\sigma/\sqrt n$.

### Derivation

The standardized statistic's central region has nominal coverage.

$$
P(-t_*\le(\bar X-\mu)/(S/\sqrt n)\le t_*)=1-\alpha
$$

Multiply by the positive standard error and rearrange.

$$
\bar X-t_*S/\sqrt n\le\mu\le\bar X+t_*S/\sqrt n
$$

Obtain a repeated-sampling coverage statement.

$$
P_\mu(\mu\in I(X))=1-\alpha
$$

### Interactive diagram

Keep the true mean fixed and repeatedly form intervals. Do they all cover it?

The display uses known-scale normal intervals and distinguishes nominal confidence from the observed finite-simulation coverage.

Online diagram: #/lesson/ps-mean-interval?view=visual

### Guided experiment

1. **Observations per sample: 25** Set observations per sample to $25$ and compare the diagram and readings.

Preset observation: At this preset: nominal confidence level $0.95$; simulated coverage fraction $0.96$; interval margin $0.391993$; repetitions $100$.

2. **Observations per sample: 4** Set observations per sample to $4$ and compare the diagram and readings.

Preset observation: At this preset: nominal confidence level $0.95$; simulated coverage fraction $0.96$; interval margin $0.979982$; repetitions $100$.

3. **Observations per sample: 100** Set observations per sample to $100$ and compare the diagram and readings.

Preset observation: At this preset: nominal confidence level $0.95$; simulated coverage fraction $0.96$; interval margin $0.195996$; repetitions $100$.

### Worked examples

#### Example 1: Calculate a $t$ interval

For normal data with $n=16,\bar x=10,s=4$ and $t_{0.975,15}\approx2.131$, find the interval.

- The standard error is one.
- Extend $2.131$ to either side of the sample mean.

**Answer: Approximately $[7.869,12.131]$.**

#### Example 2: Known scale

A normal population has known standard deviation ten. Given $n=100,\bar x=50$, find an approximate $95\%$ interval.

- The standard error is one.
- Use the standard normal critical value, approximately $1.96$.

**Answer: Approximately $[48.04,51.96]$.**

### Common mistakes

- **A confidence interval assigns probability directly to a fixed parameter** Frequentist coverage is a sampling property of the interval-generating procedure.

- **Sample standard deviation can replace known scale in $z$ without a cost** Finite normal samples require the extra scale uncertainty represented by $t$.

### Exercises and solutions

**1. With other conditions fixed, how does increasing confidence level usually change an interval?**

Hint: A larger central probability needs a larger critical value.

Answer: It widens.

- The margin increases.

**2. For a known-scale interval, what happens to its margin if sample size quadruples?**

Hint: Standard error halves.

Answer: It halves.

- With the same critical value, the margin halves.

**3. An observed frequentist interval has confidence level $95\%$. Can its parameter be assigned posterior probability $95\%$ from that alone?**

Hint: Was the parameter made random in the model?

Answer: No.

- A frequentist interval does not specify a prior distribution.

**4. If one interval misses the true value, does that prove the method is invalid?**

Hint: Nominal coverage is below one hundred percent.

Answer: Not from a single interval.

- A correct method still allows some intervals to miss.

Prerequisites: Method of moments and maximum likelihood, Normal samples, chi-square, and $t$ distributions.

## 8.4 Proportion intervals: why zero width is misleading

*Zero observed successes do not establish that the success probability is zero.*

### The idea

Zero observed successes do not establish that the success probability is zero.

### Intuition

With small samples or proportions near a boundary, a simple symmetric interval can give unreasonable answers.

### Another explanation

Boundary estimates still have sampling uncertainty.

### Quick check

After zero successes, what does reporting $[0,0]$ mainly omit?

A. Finite-sample uncertainty
B. The success count
C. The sample-size denominator

Answer: A. No observed successes do not rule out every positive probability.

### Recognize the Wald problem

A symmetric interval that plugs the sample proportion into its standard error has zero width at a boundary and may extend outside the probability range.

### Invert a score test

The Wilson interval retains the unknown proportion inside the standard error and solves the resulting quadratic inequality for more reasonable endpoints.

### Separate approximate from exact

Wilson often improves coverage but remains approximate. Exact binomial intervals invert tail probabilities; discreteness often makes their coverage conservative.

### Definition and conditions

Assume independent Bernoulli trials with a common success probability and $n>0$.

$$
\frac{\hat p+z^2/(2n)\pm z\sqrt{\hat p(1-\hat p)/n+z^2/(4n^2)}}{1+z^2/n}
$$

- Assume independent Bernoulli trials with a common success probability and $n>0$.
- Wilson is an approximate score-method interval; the default here is a two-sided central confidence level.

### Derivation

Bound the standardized difference using binomial variance at the unknown probability.

$$
(\hat p-p)^2\le z^2p(1-p)/n
$$

Collect the unknown-proportion terms into a quadratic inequality.

$$
(n+z^2)p^2-(2n\hat p+z^2)p+n\hat p^2\le0
$$

Find its two roots and take the region between them.

$$
p\in[p_L,p_U]
$$

### Interactive diagram

Keep zero successes and increase the trial count. How does the Wilson upper endpoint shrink?

Compare Wilson with the simple Wald interval, especially at zero successes.

Online diagram: #/lesson/ps-proportion-interval?view=visual

### Guided experiment

1. **Total trials: 10** Set total trials to $10$ and compare the diagram and readings.

Preset observation: At this preset: actual successes after rounding the proportion $0$; Wilson lower endpoint $0$; Wilson upper endpoint $0.277533$; Wald margin $0$.

2. **Total trials: 5** Set total trials to $5$ and compare the diagram and readings.

Preset observation: At this preset: actual successes after rounding the proportion $0$; Wilson lower endpoint $0$; Wilson upper endpoint $0.434482$; Wald margin $0$.

3. **Total trials: 100** Set total trials to $100$ and compare the diagram and readings.

Preset observation: At this preset: actual successes after rounding the proportion $0$; Wilson lower endpoint $0$; Wilson upper endpoint $0.0369935$; Wald margin $0$.

### Worked examples

#### Example 1: Zero successes

With zero successes in ten trials and $z=1.96$, approximate the Wilson upper endpoint.

- The lower endpoint is zero; the upper simplifies to $z^2/(n+z^2)$.
- $3.8416/13.8416\approx0.2775$.

**Answer: Approximately $[0,0.2775]$.**

#### Example 2: A middle proportion

With fifty successes in 100 trials and $z=1.96$, find the interval center and margin.

- The center remains one half.
- The margin is approximately $0.0962$.

**Answer: Approximately $[0.4038,0.5962]$.**

### Common mistakes

- **A zero probability estimate has no uncertainty** Boundary estimates still have sampling uncertainty.

- **An approximate interval need not identify its method** State whether the method is Wilson, Wald, exact inversion, or another procedure.

### Exercises and solutions

**1. With zero successes, what is the plug-in Wald standard error?**

Hint: The sample proportion is zero.

Answer: $0$; that is the problem.

- $\sqrt{0(1-0)/n}=0$.

**2. If all 100 trials succeed, must the true success probability equal one?**

Hint: Finite-sample uncertainty remains.

Answer: Not necessarily.

- A probability below one can also produce all successes.

**3. What does $z^2/n$ in the Wilson denominator do?**

Hint: It comes from solving the quadratic inequality.

Answer: It avoids some boundary failures of the simple plug-in method.

- It adjusts both center and width.

**4. Does an exact binomial interval have coverage exactly equal to its nominal level at every parameter value?**

Hint: The binomial distribution is discrete.

Answer: No; it is often conservative.

- Coverage is generally at least the target but may be higher.

Prerequisites: Confidence intervals for a mean and coverage, Bernoulli and binomial distributions.

## 8.5 Intervals for two means and paired differences

*First decide whether groups are independent. For paired data, analyze within-pair differences.*

### The idea

First decide whether groups are independent. For paired data, analyze within-pair differences.

### Intuition

Before-and-after measurements on the same person inform us about that person's change, not about two unrelated populations.

### Another explanation

Paired and independent designs need different standard errors.

### Quick check

What should a paired before-and-after interval model first?

A. All records mixed into one group
B. Each pair's difference
C. Duplicated data from each group

Answer: B. Differences preserve the pairing.

### Independent groups

Welch's method estimates each group's variance separately without imposing equality. Add the variances of the two means to obtain the squared standard error.

### Approximate degrees of freedom

Welch–Satterthwaite degrees of freedom can be noninteger. The pooled method needs the additional assumption of a common variance.

### Paired data

Form independent paired differences, then apply a one-sample $t$ interval to them. The effective sample size is the number of pairs, not the total record count.

### Definition and conditions

The independent two-sample Welch interval is a standard approximation; small samples need an assessment of within-group normality.

$$
\hat\Delta\pm t_{1-\alpha/2,\nu}\sqrt{v_1+v_2},\quad v_j=s_j^2/n_j,\quad\nu=\frac{(v_1+v_2)^2}{v_1^2/(n_1-1)+v_2^2/(n_2-1)}
$$

- The independent two-sample Welch interval is a standard approximation; small samples need an assessment of within-group normality.
- Paired intervals require independence between pairs and are exact $t$ intervals when differences are normal.
- Both groups must have $n_j\ge2$ and $s_1^2/n_1+s_2^2/n_2>0$ for the formulas to be defined. Paired analysis requires at least two differences with nonzero sample standard deviation.

### Derivation

The variance of a difference of independent means is the sum of their variances.

$$
\operatorname{Var}(\bar X_1-\bar X_2)=\sigma_1^2/n_1+\sigma_2^2/n_2
$$

Estimate these using the two sample variances.

$$
\widehat{\mathrm{SE}}=\sqrt{v_1+v_2}
$$

For pairs, subtract first to retain within-pair covariance.

$$
\operatorname{Var}(X-Y)=\sigma_X^2+\sigma_Y^2-2\operatorname{Cov}(X,Y)
$$

### Interactive diagram

Change group sample sizes or scales. How do the standard error and Welch degrees of freedom change?

The display gives an approximate difference interval for two independent normal groups; the text works through paired analysis separately.

Online diagram: #/lesson/ps-difference-interval?view=visual

### Guided experiment

1. **Sample size per group: 25** Set sample size per group to $25$ and compare the diagram and readings.

Preset observation: At this preset: estimated standard error $1$; Welch degrees of freedom $44.5104$; lower endpoint $-0.0147151$; upper endpoint $4.01472$.

2. **Sample size per group: 3** Set sample size per group to $3$ and compare the diagram and readings.

Preset observation: At this preset: estimated standard error $2.88675$; Welch degrees of freedom $3.7092$; lower endpoint $-6.26891$; upper endpoint $10.2689$.

3. **Sample size per group: 60** Set sample size per group to $60$ and compare the diagram and readings.

Preset observation: At this preset: estimated standard error $0.645497$; Welch degrees of freedom $109.421$; lower endpoint $0.720701$; upper endpoint $3.2793$.

### Worked examples

#### Example 1: Independent-group standard error

Two independent groups have $n_1=n_2=25,s_1=3,s_2=4$. Find the difference's standard error.

- The mean variances are $9/25,16/25$.
- Add and take the square root.

**Answer: $1$.**

#### Example 2: Paired differences

For paired differences $1,2,3$, find the mean difference and its standard error.

- The mean is two and the sample standard deviation is one.
- Use three pairs rather than six records in the standard error.

**Answer: Mean $2$; standard error $1/\sqrt3$.**

### Common mistakes

- **Every two-group problem uses independent samples** Paired and independent designs need different standard errors.

- **Welch corrects every anomaly and bias** It addresses unequal variances, not dependence, outliers, or selection bias automatically.

### Exercises and solutions

**1. Two independent means have standard errors two and three. Find the standard error of their difference.**

Hint: Add their squares, then take the square root.

Answer: $\sqrt{13}$.

- $\sqrt{4+9}=\sqrt{13}$.

**2. Ten people are measured before and after. What are the paired $t$ degrees of freedom?**

Hint: People are the independent units.

Answer: $9$.

- Ten differences give nine degrees of freedom.

**3. Must Welch degrees of freedom be rounded to an integer?**

Hint: The $t$ distribution allows positive real degrees of freedom.

Answer: No forced rounding is needed.

- The formula often produces a noninteger.

**4. Why can paired analysis be more precise?**

Hint: Common within-pair factors can cancel.

Answer: Positive within-pair correlation can reduce noise, but improvement is not unconditional.

- Positive covariance reduces the variance of a difference.

Prerequisites: Proportion intervals: why zero width is misleading.

## Chapter review

Try independently before reading the solutions.

**1. A normal population has known standard deviation four. A sample of sixty-four has mean ten. Using critical value $1.96$, calculate and interpret a confidence interval for the mean.**

Hint: Calculate the standard error, then explain repeated-sampling coverage.

Answer: Approximately $[9.02,10.98]$; this is not a posterior probability assigned directly to a fixed parameter.

- The standard error is $4/8=0.5$ and the margin of error is $0.98$.
- Under the model, this interval procedure has approximately $95\%$ coverage.

**2. Twelve paired before-and-after differences have sample mean two and sample standard deviation three. Find the standard error and degrees of freedom for a paired interval.**

Hint: The number of independent pairs is the sample size.

Answer: Standard error approximately $0.8660$; degrees of freedom $11$.

- The standard error is $3/\sqrt{12}$.
- The degrees of freedom are eleven.

# Chapter 9 · Hypothesis Testing and Decisions

Specify hypotheses, the test statistic, relevant tails, and error control before testing.

Goals:
- Interpret $p$-values correctly
- Compare means and proportions
- Account for power and multiple comparisons

## 9.1 Null hypotheses, $p$-values, and Type I errors

*A $p$-value measures how unusual the data are under the specified null model.*

### The idea

A $p$-value measures how unusual the data are under the specified null model.

### Intuition

It asks what happens if we sample from this model, not directly how likely the hypothesis is to be true.

### Another explanation

That reverses the conditioning.

### Quick check

What does a small $p$-value mainly indicate?

A. A small posterior probability for the null
B. Data this extreme are unusual under the specified null model
C. The effect must be large

Answer: B. The interpretation depends on the model, statistic, and prespecified tail.

### Prespecify the comparison

Specify the null, alternative direction, statistic, and significance level before seeing data. Do not choose the more favorable tail afterward.

### Define the $p$-value

Under the null model, find the probability of statistics at least as supportive of the alternative as the observed value. The meaning of extreme depends on a prespecified ordering.

### Distinguish errors

A Type I error rejects a true null hypothesis. Significance level controls a procedure's error probability; it is not the posterior probability that this particular conclusion is wrong.

### Definition and conditions

Specify the statistic and tails before observation, and justify the null distribution.

$$
p_{\mathrm{right}}=P_{H_0}(T\ge t_{\mathrm{obs}}),\qquad P_{H_0}(\text{reject }H_0)\le\alpha
$$

- Specify the statistic and tails before observation, and justify the null distribution.
- For a composite null, rejection probability generally must be controlled at every null parameter value.

### Derivation

Give the statistic's distribution under the null.

$$
T\mid H_0\sim F_0
$$

Accumulate the extreme region in the alternative's direction.

$$
p=P_0(T\ge t_{\mathrm{obs}})\quad\text{right-sided test}
$$

Compare with the prespecified rejection threshold.

$$
p\le\alpha\ \Rightarrow\ \text{reject }H_0
$$

### Interactive diagram

Move the observed statistic. How does the right-sided $p$-value change?

Keep the standard normal null fixed; the shading represents only the prespecified right tail.

Online diagram: #/lesson/ps-test-logic?view=visual

### Guided experiment

1. **Observed $z$: 2** Set observed $z$ to $2$ and compare the diagram and readings.

Preset observation: At this preset: observed statistic $2$; right-sided $p$-value $0.0227501$.

2. **Observed $z$: -3** Set observed $z$ to $-3$ and compare the diagram and readings.

Preset observation: At this preset: observed statistic $-3$; right-sided $p$-value $0.99865$.

3. **Observed $z$: 4** Set observed $z$ to $4$ and compare the diagram and readings.

Preset observation: At this preset: observed statistic $4$; right-sided $p$-value $3.167\times10^{-5}$.

### Worked examples

#### Example 1: A right-sided normal test

The null distribution is standard normal. At observed $z=2$, find the right-sided $p$-value.

- The null right tail is $1-\Phi(2)$.
- Approximately $0.0228$.

**Answer: Approximately $0.0228$.**

#### Example 2: Nonrejection is not proof

A test does not reject equal group means. Can the groups be declared equivalent?

- A small sample may lack power to detect a difference.
- Equivalence testing requires a prespecified negligible-difference range.

**Answer: No.**

### Common mistakes

- **A $p$-value is the probability that the null is true** That reverses the conditioning.

- **Nonsignificance proves no difference** Nonrejection may reflect low precision or low power.

### Exercises and solutions

**1. For a standard normal null and right-sided observation zero, find the $p$-value.**

Hint: Half the area is to the right.

Answer: $0.5$.

- $0.5$.

**2. For $p=0.03,\alpha=0.05$, does the prespecified rule reject?**

Hint: Compare the $p$-value with the threshold.

Answer: Reject.

- $0.03<0.05$.

**3. Is a $p$-value $P(H_0\mid\text{data})$?**

Hint: The direction of conditioning is different.

Answer: No.

- It measures data extremeness under the null.

**4. What is wrong with selecting the smaller $p$-value from left- and right-sided tests after seeing the result?**

Hint: Does the original error control still apply?

Answer: The original significance level may no longer be controlled.

- Selection creates more opportunities to reject and requires adjustment.

Prerequisites: Confidence intervals for a mean and coverage.

## 9.2 One-sample tests for a mean

*Compare the difference from the hypothesized mean with its sampling-noise scale.*

### The idea

Compare the difference from the hypothesized mean with its sampling-noise scale.

### Intuition

A one-unit difference is more unusual when standard error is small than when it is large.

### Another explanation

Its scale is sample standard deviation divided by the square root of sample size.

### Quick check

Does the mean-test denominator use individual standard deviation or the mean's standard error?

A. Individual standard deviation
B. The mean's standard error
C. The sample total

Answer: B. The comparison concerns fluctuations of a sample mean.

### Decide whether scale is known

For a normal population, use $z$ when scale is known and $t$ when unknown. Exact small-sample $t$ inference requires normality.

### Choose tails from the alternative

A two-sided alternative concerns both increases and decreases. For a symmetric $t$ distribution, use the absolute statistic to find both tails.

### Connect intervals and tests

Under the same model and significance level, a two-sided $t$ test rejects a proposed mean exactly when the corresponding $t$ confidence interval excludes it.

### Definition and conditions

An exact one-sample $t$ test requires independent normal observations and $n\ge2$.

$$
T=\frac{\bar X-\mu_0}{S/\sqrt n},\qquad p_{\mathrm{two}}=2\{1-F_{t_{n-1}}(|t_{\mathrm{obs}}|)\}
$$

- An exact one-sample $t$ test requires independent normal observations and $n\ge2$.
- Zero sample variance gives zero standard error, so the usual $t$ formula cannot be applied directly.

### Derivation

Center under the null hypothesis.

$$
H_0:\mu=\mu_0
$$

Scale by the estimated standard error of the mean.

$$
T=(\bar X-\mu_0)/(S/\sqrt n)
$$

Add the symmetric tails.

$$
P_0(|T|\ge|t|)=2P_0(T\ge|t|)
$$

### Interactive diagram

Keep the observed difference fixed and increase sample size. How do $t$ and the $p$-value change?

The $t$ test uses the specified sample summaries. Changing a summary control does not generate new random data.

Online diagram: #/lesson/ps-mean-test?view=visual

### Guided experiment

1. **Sample size: 25** Set sample size to $25$ and compare the diagram and readings.

Preset observation: At this preset: observed statistic $2$; two-sided $p$-value $0.0569398$; degrees of freedom $24$.

2. **Sample size: 3** Set sample size to $3$ and compare the diagram and readings.

Preset observation: At this preset: observed statistic $0.69282$; two-sided $p$-value $0.560059$; degrees of freedom $2$.

3. **Sample size: 80** Set sample size to $80$ and compare the diagram and readings.

Preset observation: At this preset: observed statistic $3.57771$; two-sided $p$-value $0.000595789$; degrees of freedom $79$.

### Worked examples

#### Example 1: Calculate the statistic

For $n=25,\bar x=12,s=5$ and hypothesized mean ten, find the $t$ statistic and degrees of freedom.

- The standard error is one.
- Divide the difference of two by one.

**Answer: $t=2$, with $24$ degrees of freedom; the two-sided $p$-value is approximately $0.057$.**

#### Example 2: Decide using an interval

The interval corresponding to a two-sided test is $[2,6]$. What is the decision for hypothesized value zero?

- Zero is outside the interval.
- Reject in the two-sided test at the matching level.

**Answer: Reject mean zero.**

### Common mistakes

- **A $t$ statistic divides by sample size** Its scale is sample standard deviation divided by the square root of sample size.

- **A two-sided $p$-value is always twice the right tail** First take the absolute statistic. A negative observation cannot use twice its original right tail.

### Exercises and solutions

**1. For $n=16,\bar x=3,s=2,\mu_0=2$, find the $t$ statistic.**

Hint: The standard error is two divided by four.

Answer: $2$.

- $(3-2)/0.5=2$.

**2. A symmetric two-sided test observes $t$ equal to zero. Find its $p$-value.**

Hint: There is no deviation from the hypothesized center.

Answer: $1$.

- The two tails together have probability one.

**3. Can four observations from a strongly skewed population be assigned an exact $t$ test without qualification?**

Hint: Check the normal-sample assumption.

Answer: No.

- The small sample has no such exact guarantee.

**4. Can a hypothesized value contained in the matching two-sided interval be rejected under the corresponding rule?**

Hint: Use a consistent boundary convention.

Answer: A value in the interval's interior cannot be classified as rejected.

- Do not reject values in the interior; handle exact critical boundaries by the prespecified convention.

Prerequisites: Null hypotheses, $p$-values, and Type I errors.

## 9.3 Proportion tests and exact binomial tails

*Construct a proportion test's reference distribution using the null proportion.*

### The idea

Construct a proportion test's reference distribution using the null proportion.

### Intuition

The observed success proportion is data. Assess its extremeness using probabilities calculated under the null.

### Another explanation

The score test uses the null proportion for calibration.

### Quick check

Four heads under the fair model give right-sided $p$-value $0.0625$. Reject at $0.05$?

A. Reject
B. Do not reject
C. The null has been proved

Answer: B. At this level, the discrete sample does not provide enough evidence to reject.

### Use the exact binomial model

For independent trials with a common success probability fixed by the null, the success count has a binomial distribution. Sum its tail in the prespecified direction.

### Use a large-sample score approximation

The approximate standard error uses the null proportion, not the observed proportion. Prefer an exact method when either expected null count is too small.

### Specify the two-sided convention

Discrete two-sided $p$-values do not have one universal doubling convention. Probability ordering sums null outcomes no more probable than the observed outcome; state the method used.

### Definition and conditions

The exact model assumes a fixed number of independent Bernoulli trials with a common success probability.

$$
Z=\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}},\qquad p_{\mathrm{right}}=\sum_{j=k}^{n}{n\choose j}p_0^j(1-p_0)^{n-j}
$$

- The exact model assumes a fixed number of independent Bernoulli trials with a common success probability.
- The approximation requires $0<p_0<1$ and adequate tail accuracy. The exact demonstration uses a right-sided alternative.

### Derivation

The null specifies the count distribution.

$$
X\mid H_0\sim\operatorname{Bin}(n,p_0)
$$

A right-tail event includes the observed count and every larger count.

$$
\{X\ge k\}
$$

Add their exact masses.

$$
p=\sum_{j=k}^{n}P_0(X=j)
$$

### Interactive diagram

Increase the observed count cell by cell. Does the exact right-sided $p$-value vary continuously?

The exact binomial tail forms discrete steps. The one-sided alternative always points toward greater success probability.

Online diagram: #/lesson/ps-proportion-test?view=visual

### Guided experiment

1. **Observed success proportion: 0.8** Set observed success proportion to $0.8$ and compare the diagram and readings.

Preset observation: At this preset: binomial mean $5$; binomial variance $2.5$; observed successes after rounding $8$; exact right-sided $p$-value $0.0546875$.

2. **Observed success proportion: 0** Set observed success proportion to $0$ and compare the diagram and readings.

Preset observation: At this preset: binomial mean $5$; binomial variance $2.5$; observed successes after rounding $0$; exact right-sided $p$-value $1$.

3. **Observed success proportion: 1** Set observed success proportion to $1$ and compare the diagram and readings.

Preset observation: At this preset: binomial mean $5$; binomial variance $2.5$; observed successes after rounding $10$; exact right-sided $p$-value $0.000976563$.

### Worked examples

#### Example 1: An exact right tail

Four flips of a fair coin all show heads. Testing success probability above one half, find the $p$-value.

- Under the null, at least four successes means exactly four.
- The probability is $1/16$.

**Answer: $0.0625$.**

#### Example 2: Approximation scale

Observe sixty successes in 100 trials under null probability one half. Find $z$.

- The null standard error is $\sqrt{0.25/100}=0.05$.
- Divide the proportion difference $0.1$ by it.

**Answer: $z=2$; continuity correction and exact tails produce different approximations.**

### Common mistakes

- **The observed proportion calibrates the score standard error** The score test uses the null proportion for calibration.

- **All discrete two-sided algorithms are equivalent** Probability ordering and doubled-tail conventions can differ.

### Exercises and solutions

**1. For four fair flips, find the exact right tail for at least three heads.**

Hint: Include three and four heads.

Answer: $0.3125$.

- $(4+1)/16=5/16$.

**2. Which proportion belongs in the score-test denominator?**

Hint: Calibrate using the null distribution.

Answer: The null proportion.

- Use $p_0$.

**3. Does zero observed successes make the score-test standard error zero?**

Hint: Consider an interior null probability.

Answer: Not when $0<p_0<1$.

- Zero successes do not change the null probability.

**4. Must every discrete two-sided $p$-value equal twice the smaller one-sided tail?**

Hint: Different definitions order two-sided extremes differently.

Answer: No. State the convention.

- Probability ordering need not equal simple doubling.

Prerequisites: One-sample tests for a mean, Bernoulli and binomial distributions.

## 9.4 Two-group tests and permutation reasoning

*A comparison's reference distribution must match its independent, paired, or randomized design.*

### The idea

A comparison's reference distribution must match its independent, paired, or randomized design.

### Intuition

Permutation shuffles labels that are exchangeable under the null, not arbitrary data without justification.

### Another explanation

Justify exchangeability or the randomized design.

### Quick check

What is essential for an exact permutation test?

A. Access to a computer
B. A valid null assignment mechanism or label exchangeability
C. A large dataset

Answer: B. Computational repetition cannot replace design assumptions.

### Choose the right statistic

Use Welch $t$ for independent group means and a one-sample $t$ test on paired differences. A score test of equal proportions uses the pooled proportion under the null.

### Build a permutation reference

Under random assignment and the sharp null of zero treatment effect for every individual, reassign groups according to the design. Observational data require extra exchangeability assumptions.

### Do not generalize without assumptions

Equal means with different distributions need not make raw labels exchangeable. Monte Carlo permutations add simulation error; this small example enumerates every assignment.

### Definition and conditions

Calculate Welch reference degrees of freedom using the preceding chapter's formula.

$$
T_W=\frac{\bar X_1-\bar X_2}{\sqrt{s_1^2/n_1+s_2^2/n_2}},\qquad p_{\mathrm{perm}}=\frac{\#\{|T_\pi|\ge|T_{\mathrm{obs}}|\}}{\#\{\pi\}}
$$

- Calculate Welch reference degrees of freedom using the preceding chapter's formula.
- Exact permutation inference requires a randomized design's sharp null or appropriate label exchangeability.

### Derivation

Fix the statistic and observed grouping.

$$
T_{\mathrm{obs}}=\bar x_A-\bar x_B
$$

Enumerate label assignments allowed under the null.

$$
\pi\in\Pi
$$

Divide the count of at-least-as-extreme assignments by the total.

$$
p=|\{\pi:|T_\pi|\ge|T_{\mathrm{obs}}|\}|/|\Pi|
$$

### Interactive diagram

Enumerate groupings of the four fixed values. Where does the observed difference fall?

Enumerate all six two-versus-two assignments. Two-sided extremeness uses absolute mean difference.

Online diagram: #/lesson/ps-comparison-tests?view=visual

### Guided experiment

1. **Equal group means** Choose assignment $3$ and compare the group means.

Preset observation: The groups are $\{1,4\}$ and $\{2,3\}$, each with mean $2.5$. The observed difference is $0$; all six assignments are at least as extreme, giving two-sided $p=1$.

2. **Means differ by one** Choose assignment $2$ and count assignments with absolute mean difference at least $1$.

Preset observation: The groups are $\{1,3\}$ and $\{2,4\}$, with mean difference $-1$. Four of six assignments have absolute difference at least $1$, so two-sided $p=4/6=2/3$.

3. **Means differ by two** Choose assignment $1$ and observe how the extreme-tail count changes.

Preset observation: The groups are $\{1,2\}$ and $\{3,4\}$, with mean difference $-2$. Only this assignment and its group reversal are at least as extreme, giving two-sided $p=2/6=1/3$.

### Worked examples

#### Example 1: Enumerate four values

The fixed outcomes are $1,2,3,4$, randomly split into equal groups of two. The observed first group is $3,4$. Find the two-sided mean-difference permutation $p$-value.

- There are $\binom42=6$ assignments.
- The largest absolute difference is two, attained by groups $3,4$ or $1,2$.

**Answer: $2/6=1/3$.**

#### Example 2: A pooled proportion

Two groups each have fifty trials, with thirty and twenty successes. Find the pooled proportion when testing equality.

- There are fifty total successes in 100 trials.
- The pooled proportion is one half.

**Answer: $0.5$.**

### Common mistakes

- **Any two groups can be freely permuted** Justify exchangeability or the randomized design.

- **Equal means imply identical distributions** Shapes and variances can still differ.

### Exercises and solutions

**1. Should every before-and-after label be arbitrarily shuffled in paired data?**

Hint: The design includes pairing constraints.

Answer: No.

- Arbitrary shuffling destroys within-pair structure; use randomization appropriate to the design.

**2. Two independent groups have observed difference two and estimated standard error one. Find Welch $t$.**

Hint: Divide the difference by its standard error.

Answer: $2$.

- $2/1=2$.

**3. One group is always zero; another has mean zero and large variability. Do equal means imply exchangeability?**

Hint: Compare entire distributions.

Answer: Not necessarily.

- The group distributions differ.

**4. Of six assignments in the small example, two are extreme. Find the $p$-value.**

Hint: Count directly.

Answer: $1/3$.

- $2/6=1/3$.

Prerequisites: Proportion tests and exact binomial tails, Intervals for two means and paired differences.

## 9.5 Power, effect size, and multiple comparisons

*Detection probability depends on the true effect, noise, sample size, and decision threshold.*

### The idea

Detection probability depends on the true effect, noise, sample size, and decision threshold.

### Intuition

Larger samples can make tiny effects statistically significant, so report practical magnitude too.

### Another explanation

Also report effect size and an interval.

### Quick check

With other conditions fixed, what usually happens to power when the significance threshold becomes stricter?

A. Increases
B. Decreases
C. Must remain unchanged

Answer: B. A smaller rejection region usually reduces rejection probability under the alternative too.

### Separate errors from power

Type I error is defined under a true null. Type II error is defined under a specific alternative. Power is the probability of correctly rejecting under that alternative.

### Specify the design objective

Power calculations need a meaningful target effect and scale. Post-hoc observed power based on the same estimated effect usually adds no substitute for interval information.

### Control multiple opportunities

Testing many hypotheses creates more chances for false positives. Bonferroni uses the union bound to control familywise error under any dependence, though it can be conservative. Repeated looking and selection also need treatment.

### Definition and conditions

Power refers to a specified alternative parameter and test rule.

$$
\operatorname{Power}(\theta)=P_\theta(\text{reject }H_0),\qquad P(\text{any false rejection})\le\sum_{j=1}^{m}\alpha_j
$$

- Power refers to a specified alternative parameter and test rule.
- If every Bonferroni test has level at most $\alpha/m$, familywise error is at most $\alpha$.

### Derivation

Set the rejection region under the null.

$$
R=\{|Z|>z_{1-\alpha/2}\}
$$

Under the specified alternative, calculate probability of the same region.

$$
Z\sim N(\delta\sqrt n/\sigma,1)
$$

For multiple tests, use the union bound to limit any false rejection.

$$
P(\cup_jE_j)\le\sum_jP(E_j)
$$

### Interactive diagram

Change true effect and sample size. What happens to null error level and power?

For a known-scale two-sided normal test, calculate null rejection probability separately from power at the specified alternative.

Online diagram: #/lesson/ps-power?view=visual

### Guided experiment

1. **Planned sample size: 25** Set planned sample size to $25$ and compare the diagram and readings.

Preset observation: At this preset: null significance level $0.05$; power at the specified alternative $0.705418$; standardized true effect $2.5$.

2. **Planned sample size: 5** Set planned sample size to $5$ and compare the diagram and readings.

Preset observation: At this preset: null significance level $0.05$; power at the specified alternative $0.200956$; standardized true effect $1.11803$.

3. **Planned sample size: 150** Set planned sample size to $150$ and compare the diagram and readings.

Preset observation: At this preset: null significance level $0.05$; power at the specified alternative $0.999984$; standardized true effect $6.12372$.

### Worked examples

#### Example 1: Multiple opportunities

For ten tests with familywise level at most $0.05$, what is the largest Bonferroni level per test?

- Divide the total error budget equally among ten tests.
- $0.05/10=0.005$.

**Answer: $0.005$.**

#### Example 2: Precision and significance

With effect and scale fixed, how does quadrupling sample size change the standardized normal effect?

- The standardized effect is $\delta\sqrt n/\sigma$.
- The square root of sample size doubles.

**Answer: It doubles, usually increasing power for the given two-sided test.**

### Common mistakes

- **Significance means a large effect** Also report effect size and an interval.

- **Trying repeatedly and reporting the smallest $p$-value has no effect** Selection and repeated inspection can increase false positives and must be part of the procedure.

### Exercises and solutions

**1. Type II error probability is $0.2$. Find power.**

Hint: Take its complement.

Answer: $0.8$.

- $1-0.2=0.8$.

**2. For twenty tests and familywise level $0.05$, find the Bonferroni level per test.**

Hint: Divide by the number of tests.

Answer: $0.0025$.

- $0.05/20=0.0025$.

**3. Must statistical significance imply practical importance?**

Hint: Significance also depends on sample size.

Answer: Not necessarily.

- Tiny effects can be significant in large samples.

**4. Can a fixed-sample $p$-value be used without adjustment if data collection continues until significance?**

Hint: The stopping rule changes rejection opportunities.

Answer: The original error level is not guaranteed.

- Use a prespecified sequential method or another adjustment.

Prerequisites: Two-group tests and permutation reasoning.

## Chapter review

Try independently before reading the solutions.

**1. The null hypothesis is a fair coin, and all five tosses are heads. What is the $p$-value for a prespecified right-sided exact test? What is the decision at $0.05$?**

Hint: The extreme right tail consists only of all heads.

Answer: Reject the fairness hypothesis; this does not give it posterior probability $0.03125$.

- The probability is $1/32=0.03125$.
- It is below the prespecified threshold.

**2. Five tests are performed together. To control the family-wise error rate at $0.01$, what Bonferroni threshold should each use? Must the tests be independent?**

Hint: Use the union bound.

Answer: Use $0.002$ per test; independence is not required.

- Each threshold is $0.01/5=0.002$.
- The union bound holds under arbitrary dependence.

# Chapter 10 · Relationships, Models, and Updating

Contingency tables, regression, ANOVA, and Bayesian inference answer different questions.

Goals:
- Analyze categorical data and regression relationships
- Check model assumptions and residuals
- Explain Bayesian updating and write an analysis report

## 10.1 Contingency tables and chi-square tests

*Are observed category counts far enough from the counts expected under independence?*

### The idea

Are observed category counts far enough from the counts expected under independence?

### Intuition

Use marginal proportions to predict each cell's count, then accumulate standardized squared deviations.

### Another explanation

After independence constraints, it has one.

### Quick check

What must not be too small for the chi-square approximation?

A. Expected counts
B. The table's font size
C. Category-name length

Answer: A. Sparse expected counts can undermine the asymptotic reference distribution.

### Calculate expected counts

The contingency-table null asserts row and column independence. Using observed margins, expected count is row total times column total divided by the grand total.

### Measure deviation

Add squared cell deviations divided by expected counts. This measures departure from the null model. Row and column sum constraints determine degrees of freedom.

### Check approximation conditions

Observational units must be independent and expected counts sufficiently large. This volume uses the conservative classroom rule of at least five in every cell. Sparse tables need exact or design-appropriate alternatives.

### Definition and conditions

This is a contingency-table independence test. Categories for each margin must be mutually exclusive and exhaustive.

$$
\chi^2=\sum_{i,j}\frac{(O_{ij}-E_{ij})^2}{E_{ij}},\quad E_{ij}=\frac{O_{i+}O_{+j}}{N},\quad\nu=(r-1)(c-1)
$$

- This is a contingency-table independence test. Categories for each margin must be mutually exclusive and exhaustive.
- Goodness-of-fit degrees of freedom instead equal category count minus one minus estimated parameter count. Do not interchange them.
- Units must be independent, $N>0$, and all retained row and column margins positive. Remove impossible empty categories before calculating degrees of freedom.
- Chi-square tail probabilities are asymptotic approximations. This volume uses at least five expected observations per cell as a conservative classroom rule; sparse tables need another suitable method.

### Derivation

Under independence, a joint proportion is the product of its marginals.

$$
\hat p_{ij}=\frac{O_{i+}}N\frac{O_{+j}}N
$$

Multiply by the grand total to obtain expected counts.

$$
E_{ij}=N\hat p_{ij}
$$

Accumulate scaled deviations and use the asymptotic chi-square reference.

$$
T=\sum_{i,j}(O_{ij}-E_{ij})^2/E_{ij}\approx\chi^2_{(r-1)(c-1)}
$$

### Interactive diagram

Keep marginal totals fixed and increase diagonal counts. How does the chi-square statistic change?

A two-by-two table with expected count fifteen per cell displays observed counts, expectations, and individual contributions.

Online diagram: #/lesson/ps-categorical?view=visual

### Guided experiment

1. **Count in each diagonal cell: 20** Set each diagonal cell's count to $20$ and compare the diagram and readings.

Preset observation: At this preset: expected count per cell $15$; chi-square statistic $6.66667$; degrees of freedom $1$; asymptotic right-tail $p$-value $0.00982327$.

2. **Count in each diagonal cell: 0** Set each diagonal cell's count to $0$ and compare the diagram and readings.

Preset observation: At this preset: expected count per cell $15$; chi-square statistic $60$; degrees of freedom $1$; asymptotic right-tail $p$-value $9.486\times10^{-15}$.

3. **Count in each diagonal cell: 30** Set each diagonal cell's count to $30$ and compare the diagram and readings.

Preset observation: At this preset: expected count per cell $15$; chi-square statistic $60$; degrees of freedom $1$; asymptotic right-tail $p$-value $9.486\times10^{-15}$.

### Worked examples

#### Example 1: A two-by-two table

The count-table rows are $(20,10)$ and $(10,20)$. Find expected counts and the chi-square statistic.

- Each row and column total is thirty; the grand total is sixty. Every expected count is fifteen.
- Each of four cells contributes $25/15$.

**Answer: The statistic is $20/3\approx6.667$, with one degree of freedom and asymptotic $p$-value approximately $0.0098$.**

#### Example 2: Goodness of fit

There are four categories with fixed probabilities and no estimated parameters. Find the goodness-of-fit degrees of freedom.

- The four category counts have a fixed total.
- Three independent directions remain.

**Answer: $3$.**

### Common mistakes

- **Every two-by-two table has four degrees of freedom** After independence constraints, it has one.

- **A significant association proves causation** A table association does not rule out confounding or selection bias.

### Exercises and solutions

**1. Find independence-test degrees of freedom for three rows and four columns.**

Hint: Subtract one from each dimension, then multiply.

Answer: $6$.

- $2\times3=6$.

**2. A row total is twenty, column total thirty, and grand total sixty. Find the expected count at their intersection.**

Hint: Multiply the margins and divide by the grand total.

Answer: $10$.

- $20(30)/60=10$.

**3. If every observed count equals its expectation, what is the statistic?**

Hint: Every deviation is zero.

Answer: $0$.

- The total is zero.

**4. Can repeated questionnaires from the same person be treated as independent counts without qualification?**

Hint: The observational unit is repeated.

Answer: No.

- Within-person dependence violates the independent-unit assumption.

Prerequisites: Power, effect size, and multiple comparisons, Joint and marginal distributions.

## 10.2 Least-squares lines and residuals

*Find the line minimizing the sum of squared vertical prediction errors.*

### The idea

Find the line minimizing the sum of squared vertical prediction errors.

### Intuition

Regression fits the average response at a given input; it does not require every observation to lie on the line.

### Another explanation

Causal conclusions still depend on design and identification assumptions.

### Quick check

What does ordinary least squares minimize?

A. The sum of squared vertical residuals
B. Every point's input coordinate
C. All perpendicular geometric distances

Answer: A. The error direction comes from the response variable's definition.

### Separate fitting from modeling

Least squares is a calculation on fixed data. Statistical inference additionally needs assumptions about the linear response mean and error behavior.

### Calculate slope and intercept

Divide joint variation by squared input variation for the slope. The intercept makes the fitted line pass through the sample center.

### Inspect residuals

A residual is observed minus fitted response, not perpendicular geometric distance to the line. Curvature, funnels, or time patterns can reveal omitted structure.

### Definition and conditions

Simple least squares with an intercept requires $S_{xx}>0$.

$$
\hat\beta_1=\frac{S_{xy}}{S_{xx}},\quad\hat\beta_0=\bar y-\hat\beta_1\bar x,\quad S_{xx}=\sum_i(x_i-\bar x)^2
$$

- Simple least squares with an intercept requires $S_{xx}>0$.
- Regression association alone does not justify causation or extrapolation beyond observed inputs.

### Derivation

Minimize squared vertical errors.

$$
Q(b_0,b_1)=\sum_i(y_i-b_0-b_1x_i)^2
$$

Differentiate with respect to the intercept to obtain residual sum zero.

$$
\hat\beta_0=\bar y-\hat\beta_1\bar x
$$

Substitute and differentiate with respect to slope.

$$
\hat\beta_1=S_{xy}/S_{xx}
$$

### Interactive diagram

Move one observation. How do slope, residuals, and squared error change?

Keep four observations fixed and adjust only the fifth response. Compare exact least squares with vertical residuals.

Online diagram: #/lesson/ps-regression?view=visual

### Guided experiment

1. **Fifth response: 3** Set the fifth response to $3$ and compare the diagram and readings.

Preset observation: At this preset: slope $0.5$; intercept $1$; residual sum of squares $1.5$; observations $5$.

2. **Fifth response: -1** Set the fifth response to $-1$ and compare the diagram and readings.

Preset observation: At this preset: slope $-0.3$; intercept $1.8$; residual sum of squares $7.9$; observations $5$.

3. **Fifth response: 8** Set the fifth response to $8$ and compare the diagram and readings.

Preset observation: At this preset: slope $1.5$; intercept $0$; residual sum of squares $11.5$; observations $5$.

### Worked examples

#### Example 1: Fit three points

Find the least-squares line for $(0,1),(1,2),(2,3)$.

- The sample center is $(1,2)$ and $S_{xx}=2,S_{xy}=2$.
- The slope and intercept are both one.

**Answer: $\hat y=1+x$; every residual is zero.**

#### Example 2: An imperfect fit

For points $(0,1),(1,1),(2,4)$, find slope and intercept.

- The center is $(1,2)$ and $S_{xx}=2,S_{xy}=3$.
- The slope is $1.5$ and intercept $0.5$.

**Answer: $\hat y=0.5+1.5x$.**

### Common mistakes

- **A regression line always establishes causation** Causal conclusions still depend on design and identification assumptions.

- **A good fit permits unlimited extrapolation** Outside the observed range, the relationship or conditions may change.

### Exercises and solutions

**1. Given $S_{xy}=6,S_{xx}=3$, find the slope.**

Hint: Divide the two quantities.

Answer: $2$.

- $6/3=2$.

**2. An observation is five and its prediction is three. Find the residual.**

Hint: Subtract prediction from observation.

Answer: $2$.

- $5-3=2$.

**3. If all inputs are identical, is the slope uniquely determined?**

Hint: The denominator is zero.

Answer: No.

- No input variation is available to identify a slope.

**4. If residuals show clear curvature, should you simply keep reporting a high correlation?**

Hint: A linear mean structure may be inappropriate.

Answer: Do not ignore the pattern.

- Check the model and make justified changes if needed.

Prerequisites: Contingency tables and chi-square tests, Covariance, correlation, and variance of a sum.

## 10.3 Slope tests, mean-response intervals, and prediction intervals

*Estimating an average response is easier than predicting a new observation.*

### The idea

Estimating an average response is easier than predicting a new observation.

### Intuition

A new observation adds its own random error to uncertainty about the fitted line.

### Another explanation

It omits the new observation's own random error.

### Quick check

What creates the extra one inside a prediction interval's square root?

A. The new observation's own error
B. An additional input variable
C. A font correction

Answer: A. Estimating the mean response does not include this new noise.

### State the error model

Classical exact inference treats inputs as fixed and errors as independent normal variables with zero mean and common variance. Residual plots can diagnose problems but cannot prove these assumptions.

### Estimate the slope's scale

Divide residual sum of squares by sample size minus two to estimate common error variance: slope and intercept were both fitted.

### Distinguish the two intervals

A mean-response interval includes uncertainty in estimating the mean. A prediction interval adds one new error variance. Both widen away from the mean input.

### Definition and conditions

Exact $t$ inference requires the stated linear model with independent homoscedastic normal errors and $n>2$.

$$
s^2=\frac{\mathrm{SSE}}{n-2},\quad \mathrm{SE}(\hat\beta_1)=\frac{s}{\sqrt{S_{xx}}},\quad \hat y_0\pm t_*s\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}}\quad\text{mean-response interval}
$$

- Exact $t$ inference requires the stated linear model with independent homoscedastic normal errors and $n>2$.
- For a prediction interval, add one inside the square root. The new error must be independent and follow the same model.

### Derivation

Estimate noise after fitting two parameters.

$$
s^2=\mathrm{SSE}/(n-2)
$$

The estimated mean response's variance depends on input position.

$$
\widehat{\operatorname{Var}}(\hat y_0)=s^2(1/n+(x_0-\bar x)^2/S_{xx})
$$

Add the new observation's own error variance.

$$
\widehat{\operatorname{Var}}(Y_{\mathrm{new}}-\hat y_0)=s^2(1+1/n+(x_0-\bar x)^2/S_{xx})
$$

### Interactive diagram

Move the prediction input. How do both mean-response and prediction intervals widen?

Fit the fixed five-point data and distinguish the confidence band for a mean from the prediction band for a new observation.

Online diagram: #/lesson/ps-regression-inference?view=visual

### Guided experiment

1. **Prediction input: 2** Set the prediction input to $2$ and compare the diagram and readings.

Preset observation: At this preset: slope $0.5$; intercept $1$; residual sum of squares $1.5$; mean-response interval margin $1.00638$.

2. **Prediction input: -1** Set the prediction input to $-1$ and compare the diagram and readings.

Preset observation: At this preset: slope $0.5$; intercept $1$; residual sum of squares $1.5$; mean-response interval margin $2.36017$.

3. **Prediction input: 5** Set the prediction input to $5$ and compare the diagram and readings.

Preset observation: At this preset: slope $0.5$; intercept $1$; residual sum of squares $1.5$; mean-response interval margin $2.36017$.

### Worked examples

#### Example 1: Slope standard error

For $n=12,\mathrm{SSE}=20,S_{xx}=22$, find the slope's standard error.

- The residual variance is $20/10=2$.
- The standard error is $\sqrt{2/22}$.

**Answer: Approximately $0.3015$, with ten reference degrees of freedom.**

#### Example 2: Prediction is wider

For $n=10,s=2,x_0=\bar x$, find standard errors for the mean response and a new observation.

- The mean-response standard error is $2/\sqrt{10}$.
- The prediction standard error is $2\sqrt{1+1/10}$.

**Answer: Approximately $0.6325$ and $2.0976$.**

### Common mistakes

- **A mean-response interval is also an individual prediction interval** It omits the new observation's own random error.

- **A slope test replaces residual diagnostics** The test's validity depends on its error model.

### Exercises and solutions

**1. A simple regression has eight observations. Find residual degrees of freedom.**

Hint: Both intercept and slope are fitted.

Answer: $6$.

- $8-2=6$.

**2. At the same confidence level, input, and linear error model, can a new-observation prediction interval be narrower than a mean-response confidence interval?**

Hint: It adds an extra error variance.

Answer: No.

- Under the same model and level, it cannot be narrower.

**3. How does a mean-response interval generally change as the input moves away from the center?**

Hint: Inspect the squared input-deviation term.

Answer: It widens.

- That term increases and widens the interval.

**4. Does a significant slope prove all linear-model assumptions correct?**

Hint: Separate testing from model diagnosis.

Answer: No.

- The significance calculation itself relies on those assumptions.

Prerequisites: Least-squares lines and residuals.

## 10.4 One-way analysis of variance

*To compare several group means, measure between-group differences relative to within-group noise.*

### The idea

To compare several group means, measure between-group differences relative to within-group noise.

### Intuition

Separated group centers need not give strong evidence if observations within each group are very spread out. Compare both scales.

### Another explanation

The mean-square ratio compares between-group separation with within-group variability.

### Quick check

What does an ANOVA rejection mean?

A. Every pair of groups differs
B. At least one mean differs
C. All variances are equal

Answer: B. It tests the overall hypothesis of equal means.

### Decompose sums of squares

Split total variation into between-group and within-group sums of squares. Weight between-group contributions by group sample sizes.

### Compare per degree of freedom

Divide each sum by its degrees of freedom to obtain a mean square. Under independent homoscedastic normal errors and equal null means, their ratio has an $F$ distribution.

### Interpret the overall rejection

Rejection means not all means agree; it does not imply every pair differs. Plan follow-up comparisons or control multiplicity. Unequal variances may require an adapted method.

### Definition and conditions

Classical exact one-way ANOVA requires independence, normality within groups, and a common variance.

$$
F=\frac{\mathrm{SSB}/(k-1)}{\mathrm{SSW}/(N-k)},\quad\mathrm{SSB}=\sum_jn_j(\bar y_j-\bar y)^2,\quad\mathrm{SSW}=\sum_{j,i}(y_{ij}-\bar y_j)^2
$$

- Classical exact one-way ANOVA requires independence, normality within groups, and a common variance.
- Require $k\ge2,N>k$ and positive within-group mean square. Zero noise needs separate treatment.

### Derivation

Split every deviation into within-group and between-group parts.

$$
y_{ij}-\bar y=(y_{ij}-\bar y_j)+(\bar y_j-\bar y)
$$

Within-group deviations sum to zero, canceling the cross terms.

$$
\mathrm{SST}=\mathrm{SSW}+\mathrm{SSB}
$$

Divide by the respective degrees of freedom and take the ratio under the null.

$$
F\sim F_{k-1,N-k}\quad(H_0:\mu_1=\cdots=\mu_k)
$$

### Interactive diagram

Separate the group centers or increase within-group spread. How does $F$ change?

Three groups each contain three fixed observations. Compare the sums-of-squares decomposition and $F$ right tail without interpreting significance as every pair differing.

Online diagram: #/lesson/ps-anova?view=visual

### Guided experiment

1. **Adjacent-center distance: 2** Set adjacent-center distance to $2$ and compare the diagram and readings.

Preset observation: At this preset: between-group sum of squares $24$; within-group sum of squares $6$; $F$ statistic $12$; right-tail $p$-value $0.008$.

2. **Adjacent-center distance: 0** Set adjacent-center distance to $0$ and compare the diagram and readings.

Preset observation: At this preset: between-group sum of squares $0$; within-group sum of squares $6$; $F$ statistic $0$; right-tail $p$-value $1$.

3. **Adjacent-center distance: 4** Set adjacent-center distance to $4$ and compare the diagram and readings.

Preset observation: At this preset: between-group sum of squares $96$; within-group sum of squares $6$; $F$ statistic $48$; right-tail $p$-value $0.000203542$.

### Worked examples

#### Example 1: Compare three groups

The groups are $(1,2,3),(3,4,5),(5,6,7)$. Find $F$.

- Group means are two, four, and six; the grand mean is four. Between-group sum of squares is twenty-four.
- Within-group sum of squares is six. The mean squares are twelve and one.

**Answer: $F=12$, with degrees of freedom $(2,6)$ and right-tail $p$-value $0.008$.**

#### Example 2: Equal group means

All group means are equal but there is within-group variability. Find between-group sum of squares and $F$.

- Every group mean equals the grand mean.
- All between-group deviations are zero.

**Answer: Between-group sum of squares is zero and $F=0$.**

### Common mistakes

- **Within-group noise is irrelevant when comparing means** The mean-square ratio compares between-group separation with within-group variability.

- **Any number of post-hoc comparisons can use the original threshold** Multiple comparisons create more error opportunities and need suitable control.

### Exercises and solutions

**1. Four groups contain twenty observations in total. Find the $F$ degrees of freedom.**

Hint: Between groups subtract one; within groups subtract the group count.

Answer: $(3,16)$.

- $(4-1,20-4)=(3,16)$.

**2. The between-group mean square is six and within-group mean square two. Find $F$.**

Hint: Take their ratio.

Answer: $3$.

- $6/2=3$.

**3. Does a significant ANOVA imply every pair of groups differs?**

Hint: What is the overall null?

Answer: No.

- Only equality of all means is rejected.

**4. With very unequal group variances, is the classical $F$ reference still exact?**

Hint: The common-variance assumption fails.

Answer: Exactness is not guaranteed.

- Assess an approximation or use a heteroscedasticity-appropriate method.

Prerequisites: Slope tests, mean-response intervals, and prediction intervals.

## 10.5 Beta–binomial updating and a complete analysis report

*Bayesian inference combines a prior and likelihood into a posterior parameter distribution.*

### The idea

Bayesian inference combines a prior and likelihood into a posterior parameter distribution.

### Intuition

It allows probability statements about parameters within a specified model; conclusions therefore depend on both prior and likelihood.

### Another explanation

Prior influence can be especially visible in small samples. Check sensitivity.

### Quick check

How do prior parameters change in Beta–binomial updating?

A. Add the trial count to both
B. Add successes to one and failures to the other
C. Leave both unchanged

Answer: B. Likelihood exponents add to prior exponents.

### Specify a prior

A Beta density describes uncertainty about success probability between zero and one. Two positive shape parameters control location and concentration. They are not unconditionally literal historical success and failure counts.

### Update the posterior

For independent Bernoulli trials, add success and failure exponents to the prior. The posterior mean combines prior and sample information and equals the posterior predictive success probability.

### Write a complete report

State the question, observational units, sampling or assignment design, model assumptions, effect and interval, diagnostics, and limitations. A credible interval is a posterior probability statement conditional on prior, model, and data; do not conflate it with frequentist confidence.

### Definition and conditions

Prior shape parameters satisfy $a,b>0$. The likelihood assumes a fixed number of independent Bernoulli trials with a common probability.

$$
p\sim\operatorname{Beta}(a,b),\quad p\mid k,n\sim\operatorname{Beta}(a+k,b+n-k),\quad E[p\mid k,n]=\frac{a+k}{a+b+n}
$$

- Prior shape parameters satisfy $a,b>0$. The likelihood assumes a fixed number of independent Bernoulli trials with a common probability.
- Posterior and prediction depend on the specified model. Do not hide prior sensitivity behind a point estimate.

### Derivation

Write the parameter-dependent part of the prior density.

$$
\pi(p)\propto p^{a-1}(1-p)^{b-1}
$$

Multiply by the binomial likelihood.

$$
\pi(p\mid x)\propto p^{a+k-1}(1-p)^{b+n-k-1}
$$

Recognize the normalized Beta distribution and calculate its mean.

$$
E[p\mid x]=(a+k)/(a+b+n)
$$

### Interactive diagram

Keep data fixed and change the prior shapes. How does the posterior move and concentrate?

Compare prior and posterior Beta densities, posterior mean, central credible interval, and predictive probability.

Online diagram: #/lesson/ps-bayesian-inference?view=visual

### Guided experiment

1. **First prior shape: 1** Set the first prior shape to $1$ and compare the diagram and readings.

Preset observation: At this preset: first posterior shape $15$; second posterior shape $7$; posterior mean and predictive success probability $0.681818$; lower central credible endpoint $0.478249$.

2. **First prior shape: 0.5** Set the first prior shape to $0.5$ and compare the diagram and readings.

Preset observation: At this preset: first posterior shape $14.5$; second posterior shape $7$; posterior mean and predictive success probability $0.674419$; lower central credible endpoint $0.467928$.

3. **First prior shape: 8** Set the first prior shape to $8$ and compare the diagram and readings.

Preset observation: At this preset: first posterior shape $22$; second posterior shape $7$; posterior mean and predictive success probability $0.758621$; lower central credible endpoint $0.590469$.

### Worked examples

#### Example 1: Update a uniform prior

The prior is $\operatorname{Beta}(1,1)$ and seven of ten trials succeed. Find the posterior and predictive success probability.

- Add seven successes and three failures to the shape parameters.
- The posterior is $\operatorname{Beta}(8,4)$.

**Answer: The posterior predictive success probability is $8/12=2/3$.**

#### Example 2: Prior sensitivity

For the same data but prior $\operatorname{Beta}(10,10)$, find the posterior mean.

- Update to $\operatorname{Beta}(17,13)$.
- The mean is $17/30$.

**Answer: Approximately $0.5667$, different from the weak-prior result.**

### Common mistakes

- **Bayesian conclusions do not depend on the prior** Prior influence can be especially visible in small samples. Check sensitivity.

- **A credible interval is the same as a similarly named confidence interval** Posterior probability and repeated-sampling coverage are different statements.

### Exercises and solutions

**1. With prior $\operatorname{Beta}(2,3)$ and one success in four trials, find the posterior.**

Hint: Add successes and failures to the corresponding shapes.

Answer: $\operatorname{Beta}(3,6)$.

- $(2+1,3+3)=(3,6)$.

**2. Success probability has posterior $\operatorname{Beta}(3,6)$. Find the posterior predictive probability of success in the next Bernoulli trial.**

Hint: Divide the first shape by the sum of shapes.

Answer: $1/3$.

- $3/9=1/3$.

**3. Does a posterior $95\%$ credible interval mean the same thing as a frequentist $95\%$ confidence interval?**

Hint: Parameter probability and repeated-sampling coverage differ.

Answer: No.

- The first uses the prior-updated parameter distribution; the second describes an interval-generating procedure.

**4. Is a report containing only significant or nonsignificant sufficient?**

Hint: Readers need to understand design and practical magnitude.

Answer: No.

- Also give effects, intervals, assumptions, methods, and limitations.

Prerequisites: One-way analysis of variance, Total probability and Bayes' rule.

## Chapter review

Try independently before reading the solutions.

**1. Least-squares summaries are $n=10,\bar x=2,\bar y=5,S_{xx}=8,S_{xy}=12,\mathrm{SSE}=16$. Find the fitted line and the standard error of its slope.**

Hint: Fit the line, then estimate the error variance using the residual degrees of freedom.

Answer: $\hat y=2+1.5x$; slope standard error $0.5$.

- The slope is $1.5$ and the intercept is two.
- The estimated error variance is $16/8=2$ and the slope standard error is $\sqrt{2/8}=0.5$.

**2. The prior is $\operatorname{Beta}(2,2)$, and five of eight trials succeed. Find the posterior and predictive success probability, and state one model assumption.**

Hint: Add the numbers of successes and failures to the prior parameters.

Answer: Posterior $\operatorname{Beta}(7,5)$; predictive probability $7/12$.

- The posterior is $\operatorname{Beta}(7,5)$.
- The predictive probability is $7/12$. The model assumes independent Bernoulli trials with a fixed success probability, among other conditions.

# Final assessment

Try independently before revealing the solutions. Use them for self-assessment, not certification.

**1. A voluntary online survey finds that users of a tool are more productive. A report claims, “The tool increases everyone's productivity.” Identify at least two unsupported inferential steps.**

Hint: Examine sampling, treatment assignment, and measurement.

Answer: The evidence does not adequately establish causation or generalization to the whole population.

- A voluntary sample may suffer from coverage and selection bias.
- Tool use was not randomly assigned; confounding or reverse causation may explain the association.
- The definition and measurement of productivity must also be clear.

**2. Two independent fair dice are rolled. Given that their sum is seven, what is the probability that the first die is six?**

Hint: List the ordered outcomes in the conditioning event.

Answer: $1/6$.

- Six equally likely ordered outcomes have sum seven.
- Only $(6,1)$ meets the target condition.

**3. Thirty percent of a thousand items come from source A. Defect rates are $0.01$ for A and $0.04$ for B. Given a defective item, what is the posterior probability that it came from A?**

Hint: Use pathway proportions; there is no need to draw all thousand items.

Answer: $3/31\approx0.0968$.

- The defective-item pathway probabilities are $0.003$ for A and $0.028$ for B.
- The denominator is $0.031$.

**4. Independent repeated trials have success probability $0.2$. Find the probability of exactly one success in the first five trials and the expected total number of trials until the first success.**

Hint: A fixed number of trials and a fixed success target require different models.

Answer: $0.4096$ and $5$.

- The binomial probability is $\binom51(0.2)(0.8)^4=0.4096$.
- The expected geometric waiting time is $1/0.2=5$.

**5. A joint density equals two on $0<x<y<1$. Find $f_X(x)$ and $E[Y\mid X=x]$, and determine whether the variables are independent.**

Hint: Integrate over the other coordinate, then normalize.

Answer: $2(1-x)$ and $(x+1)/2$; not independent.

- $f_X(x)=2(1-x)$ on $(0,1)$.
- Conditionally, $Y$ is uniform on $(x,1)$, with mean $(x+1)/2$.
- The conditional distribution changes with $x$, so the variables are not independent.

**6. An independent sample comes from a population with standard deviation twelve. The current sample size is thirty-six. What sample size would reduce the standard error of the mean from two to one? Would this automatically remove selection bias?**

Hint: Distinguish square-root gains in precision from sample representativeness.

Answer: $144$; selection bias is not automatically removed.

- Solving $12/\sqrt n=1$ gives $n=144$.
- Increasing the sample size does not automatically change the selection mechanism.

**7. A normal sample has $n=9,\bar x=12,s=3$, and $t_{0.975,8}=2.306$ is given. Calculate a mean interval and determine whether a two-sided test at the corresponding level rejects a population mean of ten.**

Hint: Use the same model for the interval and test.

Answer: Interval approximately $[9.694,14.306]$; do not reject a population mean of ten.

- The standard error is one, giving interval $[9.694,14.306]$.
- Ten lies inside the interval.

**8. Four tosses of a fair coin are all heads. What is the $p$-value for a prespecified two-sided, probability-ordering exact binomial test? Why is it not the probability that the coin is fair?**

Hint: Include the opposite tail with equally small probability mass under the null.

Answer: $0.125$; it is not the posterior probability of the null hypothesis.

- Zero heads and four heads each have mass $1/16$; the other outcomes have larger mass.
- Their sum is $1/8$.
- The $p$-value assigns probabilities to outcomes under the null hypothesis; it does not specify a prior for the parameter.

**9. Three groups each contain three observations. Their means are two, four, and six, and each sample variance is one. Find the ANOVA $F$ statistic and degrees of freedom. Does rejection imply that every pair of group means differs?**

Hint: Recover the within-group sum of squares from the summaries.

Answer: $F=12$ with degrees of freedom $(2,6)$; it does not establish a difference for every pair.

- The grand mean is four and the between-group sum of squares is twenty-four.
- Each group's within-group sum of squares is two, for a total of six.
- The ratio of mean squares is twelve, with degrees of freedom $(2,6)$. An overall rejection does not identify individual pairs.

**10. The prior is $\operatorname{Beta}(1,1)$, and the data contain three successes and one failure. Give the posterior, predictive success probability, and at least four types of information to retain in an analysis report.**

Hint: Retain more than a point estimate after updating.

Answer: $\operatorname{Beta}(4,2)$ and $2/3$; report the design, model, precision, and limitations.

- The posterior is $\operatorname{Beta}(4,2)$ and the predictive success probability is $2/3$.
- Retain the observations and sampling design, prior and likelihood, effects and intervals, and diagnostics and limitations.

# Glossary

- **Observational Units and Variables**: Identify what each row represents before discussing its measured features.

- **Populations, Samples, and Selection Bias**: Who supplies the data determines whom the conclusions may describe.

- **Random Sampling and Random Assignment**: Random sampling supports population generalization; random assignment supports causal comparisons.

- **Frequency Plots, Histograms, and Empirical Distributions**: Plots show distributions; check what each vertical axis measures.

- **Mean, Median, and Spread**: The center locates the data; spread describes how dispersed they are.

- **Sample Spaces and Events**: List the possible outcomes, then specify which form an event.

- **Probability Axioms and the Addition Rule**: To calculate the probability of at least one event, subtract the overlap counted twice.

- **The Multiplication Principle, Permutations, and Combinations**: Decide whether order matters before choosing how to count.

- **Conditional Probability and the Multiplication Rule**: Knowing an event occurred restricts the possible outcomes and renormalizes their probabilities.

- **Independence, Disjoint Events, and Repeated Trials**: Independence means knowing one event occurred does not change the probability of the other.

- **Total Probability and Bayes' Rule**: Combine probabilities across sources, then use the observation to update their relative plausibility.

- **Random Variables, Mass Functions, and Cumulative Distributions**: A random variable assigns a number to each outcome; its distribution describes how those numbers occur.

- **Expectation and Linearity**: Expectation is a probability-weighted average, not the most common outcome.

- **Variance, Standard Deviation, and Covariance Terms**: Variance measures squared deviations from the expectation.

- **Markov's and Chebyshev's Inequalities**: Partial information about a distribution can still bound its tail probabilities.

- **Bernoulli and Binomial Distributions**: Count successes in a fixed number of independent trials with the same success probability.

- **Geometric and Negative Binomial Waiting Times**: Fix a success target and count the trials needed to reach it.

- **Sampling Without Replacement and the Hypergeometric Distribution**: For draws without replacement from a fixed population, the hypergeometric model counts selected targets.

- **Poisson Counts and Rare Events**: A Poisson model counts events in a specified interval, with the expected count as its parameter.

- **Choosing and Approximating Discrete Models**: Choose the exact model first, then state what an approximation preserves.

- **Densities and Continuous Cumulative Distributions**: A continuous variable's interval probability is area under its density curve.

- **Uniform Distributions and Exponential Waiting Times**: Uniform models give equal probabilities to equal-length intervals; a homogeneous Poisson process has exponential waiting times.

- **Normal Distributions and Standardization**: Subtract the mean and divide by the standard deviation to use a common normal probability scale.

- **Transformations: Start with Cumulative Probability**: A transformation changes both the values and the probability density per interval.

- **Continuous Expectation, Variance, and Tail Integrals**: Replace probability-weighted sums with integrals to calculate a continuous variable's average behavior.

- **Joint and Marginal Distributions**: A joint distribution describes how two variables take values together.

- **Conditional Distributions and Densities**: Fix one variable, then renormalize the remaining slice.

- **Independence and Product Distributions**: Independence requires joint probabilities to factor for every pair of measurable value regions.

- **Covariance, Correlation, and the Variance of a Sum**: Covariance describes joint deviations from the means; correlation removes the units.

- **Conditional Expectation and Total Variance**: Calculate within groups, then account for differences between groups.

- **The Law of Large Numbers and Relative Frequencies**: Under the stated assumptions, averages of independent repetitions concentrate around their expectation.

- **The Central Limit Theorem**: Under the stated conditions, standardized sums of many independent contributions approach a normal distribution.

- **Sample Means and Standard Errors**: Standard deviation measures individual variation; standard error measures an estimator's sampling variation.

- **Normal Samples, Chi-Square, and $t$ Distributions**: Replacing an unknown population scale with a sample standard deviation adds uncertainty.

- **Bootstrap: Resampling the Observed Sample**: Treat the sample as an empirical population and repeatedly sample from it with replacement.

- **Bias, Consistency, and Mean Squared Error**: An estimator can miss systematically, fluctuate substantially, or both.

- **The Method of Moments and Maximum Likelihood**: Connecting model parameters to data requires an explicit sampling model.

- **Mean Confidence Intervals and Coverage**: A confidence level describes the procedure's repeated-sampling coverage, not the probability that a particular realized interval contains a fixed parameter.

- **Proportion Intervals: Why Zero Width Fails**: Observing no successes does not establish that the success probability is zero.

- **Two-Mean Differences and Paired Intervals**: Determine whether the groups are independent; for paired data, analyze within-pair differences.

- **Null Hypotheses, $p$-Values, and Type I Errors**: A $p$-value measures how unusual the observed statistic or a more extreme one would be under the null hypothesis.

- **One-Sample Mean Tests**: Compare the difference between the sample mean and hypothesized mean with its sampling-noise scale.

- **Proportion Tests and Exact Binomial Tails**: For a proportion test, construct the reference distribution using the null proportion.

- **Two-Group Tests and Permutation Methods**: The reference distribution must match the independent, paired, or randomized design.

- **Power, Effect Size, and Multiple Comparisons**: The chance of detecting a difference depends on the true effect, noise, sample size, and decision threshold.

- **Contingency Tables and Chi-Square Tests**: How far do the observed category counts depart from those expected under independence?

- **Least-Squares Lines and Residuals**: Find the line that minimizes the sum of squared vertical prediction errors.

- **Slope Tests, Mean-Response Intervals, and Prediction Intervals**: Estimating a mean response involves less uncertainty than predicting a new observation.

- **One-Way Analysis of Variance**: Compare between-group mean differences with within-group noise.

- **Beta–Binomial Updating and Analysis Reports**: Bayesian inference combines a prior and likelihood to obtain a posterior distribution for the parameter.

# Proof supplements and scope

## Prerequisites and Scope

The first four chapters require elementary algebra and summation. Continuous densities and transformations require single-variable integration; joint densities use basic double integrals, with links to the calculus volumes for review. This book covers a complete introductory undergraduate probability and statistics course. It does not develop measure theory, a full theory of stochastic processes, multiple regression, comprehensive experimental design, or advanced nonparametric inference. Poisson processes appear only as introductory context for count and waiting-time models.

## Conditions for Expectation, Variance, and Convergence

Finite discrete supports allow direct summation; infinite supports require checking absolute integrability or the conditions for nonnegative integrals. The weak law of large numbers is proved using Chebyshev's inequality under finite variance. The classical CLT is stated and explored through simulations; a general proof requires characteristic functions or other probability tools. Finite simulations are not presented as proofs. The strong law and limit theory for dependent samples are not proved here.

## Why Normal-Sample Variance Loses One Degree of Freedom

Decompose an independent standard-normal vector along the constant-vector direction and its orthogonal complement. The first projection determines the sample mean; the complement has dimension $n-1$, and its squared length gives a chi-square variable. Orthogonal components of a standard-normal vector are independent, yielding exact independence of the sample mean and sample variance. General nonnormal samples retain some moment identities but not this independence.

## $t$, Chi-Square, $F$, and Numerical Probabilities

A $t$ variable is a standard normal divided by the square root of an independent chi-square variable divided by its degrees of freedom. The ratio of two independent chi-square variables, each divided by its degrees of freedom, gives $F$. Demonstrations calculate cumulative probabilities and quantiles using Gamma, regularized incomplete Beta/Gamma functions, and bisection. Readouts are floating-point approximations; displayed digits do not imply measurement precision.

## Discrete Tails and Endpoint Conventions

Geometric and negative binomial variables in this book count the total trials, including the final success. Binomial right tails include the observed count. A probability-ordering two-sided binomial test sums outcomes whose null mass is no greater than the observed mass; this is not always twice a one-sided tail. Continuity corrections apply only to specified approximations, not to exact count probabilities.

## Limits of Resampling and Permutation Methods

The ordinary bootstrap draws with replacement from the empirical distribution and preserves the original sample size. Percentile endpoints use linearly interpolated order-statistic quantiles; nominal coverage is not guaranteed for arbitrary small samples. The permutation demonstration enumerates all six equally likely assignments of four fixed outcomes to two groups of two. Exactness relies on randomization under a sharp null or on exchangeability. Bootstrap and permutation procedures are not interchangeable.

## Confidence, Credibility, and Significance

Confidence-interval coverage is a repeated-sampling property of an interval procedure. A Bayesian credible interval describes parameter probability conditional on a prior, model, and data. A $p$-value evaluates extremeness under the null; it is not a parameter posterior. Statistical significance does not establish practical importance, causation, or model correctness. Multiple comparisons and stopping rules must be included in the full analysis procedure.

## Writing a Reproducible Analysis

Retain raw data and units, missing-data handling, sampling or randomization design, prespecified questions and contrast directions, model assumptions, calculations, effects and uncertainty, diagnostics, sensitivity checks, and unverified assumptions. Label questions formed after exploration as exploratory rather than presenting them as prespecified tests. All simulations use visible, fixed seeds; changing a seed changes the finite sample, not the theoretical model.

# Sources and provenance

Explanations, derivations, worked examples, solutions, and diagrams were independently authored by AI. Sources informed scope, hypotheses, and teaching design. Original prose and images were not copied. Checks do not constitute formal proofs.

- [MIT OCW · 18.05 Introduction to Probability and Statistics](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/pages/syllabus/): Used to check course coverage. Explanations, derivations, and exercises were written independently; original course exercises are not reproduced.

- [NIST · Binomial Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda366i.htm): Used to verify the binomial model, probability mass function, and moments.

- [NIST · Poisson Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda366j.htm): Used to verify Poisson parameters, probability mass function, and moments.

- [NIST · Normal Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm): Used to verify normal parameterization and standardization.

- [NIST · t Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3664.htm): Used to verify the t density, degrees of freedom, and tails.

- [NIST · Chi-Square Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3666.htm): Used to verify the chi-square distribution and its degrees-of-freedom parameterization.

- [NIST · Confidence Limits for the Mean](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm): Used to verify normal-mean intervals and the interpretation of coverage.

- [NIST · Two-Sample t-Test for Equal Means](https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm): Used to verify two-sample standard errors, Welch degrees of freedom, and assumptions.

- [NIST · Linear Least Squares Regression](https://www.itl.nist.gov/div898/handbook/pmd/section4/pmd431.htm): Used to verify the least-squares model, parameters, and error assumptions.

- [NIST · One-Way ANOVA](https://www.itl.nist.gov/div898/handbook/ppc/section2/ppc231.htm): Used to verify the ANOVA decomposition, degrees of freedom, and F reference distribution.

- [R stats · Beta Distribution](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/Beta.html): Used to verify Beta parameterization, density, and quantile definitions.

- [R stats · Exact Binomial Test](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/binom.test.html): Used to verify exact binomial test tails and discreteness.

- [R stats · Test of Equal or Given Proportions](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/prop.test.html): Used to verify proportion score tests and interval inversion. This volume explicitly uses Wilson intervals without a continuity correction.

- [NIST · Contingency tables](https://www.itl.nist.gov/div898/handbook/prc/section4/prc45.htm): Used to verify counts, expected counts, and reference distributions for contingency-table independence tests. Explanations were written independently.
