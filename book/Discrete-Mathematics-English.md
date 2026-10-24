# AI University · Discrete Mathematics

From precise definitions to sound reasoning

English edition 1 · source v0.1.1 · AI-authored · CC0 text / MIT code · Not individually human-reviewed

Logic and proof, sets and relations, integers, induction and algorithms, counting, recurrences, graphs, trees, and network algorithms. Each lesson includes hypotheses, derivations, examples, solved exercises, and local interactive illustrations.

Scope: A complete introductory course in eight chapters and forty lessons, covering proof, discrete structures, counting and recurrences, elementary graph theory, and common network algorithms. Computability, complexity theory, advanced combinatorics, and abstract algebra belong to later courses.

Read the intuition, check the conditions, follow the derivations and examples, then try the exercises. Interactive diagrams are available online; finite sampling is not a mathematical proof.

## Contents

### Logic and proof

- 1.1 Propositions and logical connectives
- 1.2 Truth tables and logical equivalence
- 1.3 Quantifiers, domains, and negation
- 1.4 Direct proofs, cases, and counterexamples
- 1.5 Contraposition and contradiction

### Sets, functions, and relations

- 2.1 Set operations and power sets
- 2.2 Functions, injections, and surjections
- 2.3 Binary relations and relation matrices
- 2.4 Equivalence relations and partitions
- 2.5 Partial orders, Hasse diagrams, and lattices

### Integers and congruences

- 3.1 Divisibility, greatest common divisors, and least common multiples
- 3.2 The Euclidean algorithm and Bézout's identity
- 3.3 Primes and unique factorization
- 3.4 Congruences and modular arithmetic
- 3.5 Modular inverses and the Chinese remainder theorem

### Induction, recursion, and algorithms

- 4.1 Mathematical induction
- 4.2 Strong induction and well-ordering
- 4.3 Recursive definitions and structural induction
- 4.4 Loop invariants and termination
- 4.5 Algorithm growth and asymptotic notation

### Basic counting

- 5.1 The sum and product rules
- 5.2 The pigeonhole principle and double counting
- 5.3 Permutations and combinations
- 5.4 The binomial theorem and Pascal's identity
- 5.5 Repeated selections and stars and bars

### Recurrences and combinatorial methods

- 6.1 Inclusion–exclusion
- 6.2 Recurrences and first-order equations
- 6.3 Second-order linear recurrences
- 6.4 Generating functions and constrained counting
- 6.5 Counting and discrete probability

### Graphs and connections

- 7.1 Graphs, adjacency lists, and adjacency matrices
- 7.2 Degrees and the handshaking lemma
- 7.3 Connectivity, breadth-first search, and bipartite graphs
- 7.4 Euler trails and Hamilton cycles
- 7.5 Planar graphs and vertex coloring

### Trees and network algorithms

- 8.1 Trees and spanning trees
- 8.2 Rooted trees, traversals, and prefix codes
- 8.3 Minimum spanning trees and Kruskal's algorithm
- 8.4 Dijkstra's shortest-path algorithm
- 8.5 Bipartite matching, augmenting paths, and flow

# Chapter 1 · Logic and proof

State a claim precisely.

Goals:
- Identify propositions
- Specify the domain
- Use the contrapositive

## 1.1 Propositions and logical connectives

*First decide whether a statement has a definite truth value; then combine it with other statements.*

### The idea

First decide whether a statement has a definite truth value; then combine it with other statements.

### Intuition

AND requires both statements to hold. Mathematical OR allows both to hold.

### Another explanation

Ordinary disjunction allows both statements to hold.

### Quick check

Which assignment makes an implication false?

A. True antecedent, false consequent
B. False antecedent, true consequent
C. Both false

Answer: A. Only a true antecedent and a false consequent violate the implication.

### Identify propositions

“Seven is prime” has a definite truth value. “Close the door” is a request. “It is large” needs a specified object and standard before it becomes a definite proposition.

### Combine statements

A conjunction requires both statements to be true; a disjunction requires at least one. Negation reverses truth. Exclusive OR requires exactly one true statement.

### Understand implication

An implication rules out just one case: a true antecedent and a false consequent. It specifies a logical condition, not necessarily a sequence in time or a causal relationship.

### Definition and conditions

In classical two-valued logic, every proposition is either true or false, exclusively.

$$
p\to q\equiv\neg p\lor q
$$

- This lesson uses classical two-valued logic.
- Connectives are defined by truth values, which need not capture every everyday meaning of their names.

### Derivation

List the four assignments to the antecedent and consequent.

$$
(p,q)\in\{0,1\}^{2}
$$

Identify the one assignment that violates the implication.

$$
p=1,\ q=0
$$

On the other three rows, the negated antecedent or the consequent is true.

$$
p\to q\equiv\neg p\lor q
$$

### Interactive diagram

Switch between assignments. Which row makes the implication false?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-propositions?view=visual

### Guided experiment

1. **Assignment row: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: antecedent $0$; consequent $0$; implication $1$.

2. **Assignment row: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: antecedent $0$; consequent $1$; implication $1$.

3. **Assignment row: 3** Set the control to $3$. Observe which objects, relations, or counts change.

Preset observation: At this setting: antecedent $1$; consequent $1$; implication $1$.

### Worked examples

#### Example 1: Exclude one case

Suppose “If it rains, I take an umbrella.” It rains, but I take no umbrella. Is the implication true?

- The antecedent is true and the consequent false.
- This is the implication's only false case.

**Answer: False.**

#### Example 2: Inclusive OR

When both propositions are true, what are the truth values of OR and exclusive OR?

- OR requires at least one true statement.
- Exclusive OR excludes the case where both are true.

**Answer: OR is true; exclusive OR is false.**

### Common mistakes

- **OR means exactly one of the two** Ordinary disjunction allows both statements to hold.

- **Implication establishes causation** A truth-value constraint alone gives no causal mechanism.

### Exercises and solutions

**1. Is an implication true when its antecedent is false and its consequent true?**

Hint: Check the only false row.

Answer: True.

- This is not the true-antecedent, false-consequent case.

**2. How many two-valued assignments are there to three propositions?**

Hint: Each has two choices.

Answer: Eight.

- $2^{3}=8$.

**3. Is “Prove this result” a proposition?**

Hint: Distinguish a request from a statement.

Answer: No.

- It requests an action rather than asserting something true or false.

**4. If both propositions are false, is their disjunction true?**

Hint: Is at least one true?

Answer: False.

- Neither is true.

Prerequisites: Elementary algebra.

## 1.2 Truth tables and logical equivalence

*Two expressions are logically equivalent only when they agree on every assignment.*

### The idea

Two expressions are logically equivalent only when they agree on every assignment.

### Intuition

Agreement on one row says nothing about the others. Equivalence requires every row to match.

### Another explanation

Every assignment must match.

### Quick check

How many counterexample rows suffice to refute equivalence?

A. Every row
B. Just one
C. Truth tables cannot be used

Answer: B. One disagreeing assignment disproves agreement on all assignments.

### Test equivalence

For finitely many propositional variables, list all assignments. Agreement on every row completely verifies equality of these truth functions.

### Use De Morgan's laws

Negating “both hold” gives “at least one fails.” Negating “at least one holds” gives “both fail.”

### Recognize tautologies

A formula true on every row is a tautology. A formula true on at least one row is satisfiable; one false on every row is a contradiction.

### Definition and conditions

Logical equivalence requires equal truth values on all assignments.

$$
\neg(p\land q)\equiv\neg p\lor\neg q
$$

- Compare classical truth functions on the same variables.

### Derivation

A conjunction is true only when both statements are true.

$$
p\land q=1\iff p=q=1
$$

Negate this to exclude the case where both are true.

$$
\neg(p\land q)=0\iff p=q=1
$$

The right-hand expression is false in exactly that case too.

$$
\neg p\lor\neg q=0\iff p=q=1
$$

### Interactive diagram

Switch comparison modes. Where do counterexample rows appear?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-logical-equivalence?view=visual

### Guided experiment

1. **Comparison mode: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: counterexample rows $0$.

2. **Comparison mode: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: counterexample rows $2$.

3. **Comparison mode: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: counterexample rows $0$.

### Worked examples

#### Example 1: Excluded middle

What type of formula is $p\lor\neg p$?

- If the proposition is true, the left term is true.
- If it is false, the right term is true.

**Answer: A tautology.**

#### Example 2: Find a failure of equivalence

Are $p\to q$ and $q\to p$ equivalent?

- Take $p=0,q=1$.
- The first is true and the second false.

**Answer: They are not equivalent.**

### Common mistakes

- **One matching row establishes equivalence** Every assignment must match.

- **Satisfiable means tautological** Satisfiability requires only one true row.

### Exercises and solutions

**1. How many rows does a four-variable truth table have?**

Hint: Each variable independently has two choices.

Answer: Sixteen rows.

- $2^{4}=16$.

**2. Negate $p\lor q$.**

Hint: Use De Morgan's law.

Answer: $\neg p\land\neg q$.

- Both propositions must be false.

**3. Can agreement on one row prove equivalence?**

Hint: What quantifier does equivalence require?

Answer: No.

- All assignments must agree.

**4. Is $p\land\neg p$ satisfiable?**

Hint: Consider both possible truth values.

Answer: No.

- At least one conjunct is always false.

Prerequisites: Propositions and logical connectives.

## 1.3 Quantifiers, domains, and negation

*A quantifier specifies “every” or “at least one”; the domain specifies which objects it concerns.*

### The idea

A quantifier specifies “every” or “at least one”; the domain specifies which objects it concerns.

### Intuition

One failure refutes “every object works.” Refuting “some object works” requires ruling out every object.

### Another explanation

Reordering mixed quantifiers changes witness dependencies.

### Quick check

If every row has a true cell, must some column be entirely true?

A. Always
B. Only in a square table
C. No

Answer: C. Different rows may use different columns as witnesses.

### Specify the domain

“Every number has a successor” means different things on a finite set and on the integers. Specify the domain before applying quantifiers.

### Change quantifier order

Everyone liking some dish does not imply that one dish is liked by everyone. An existential witness may depend on preceding variables.

### Negate quantifiers

Negate a universal statement by asserting a counterexample; negate an existential statement by denying it for every object. For nested quantifiers, switch each from outside inward.

### Definition and conditions

Quantifiers bind variables. Their order determines how existential witnesses may depend on other variables.

$$
\neg\forall x\,P(x)\equiv\exists x\,\neg P(x)
$$

- Use the specified domain.
- The displayed two-dimensional table has nonempty row and column sets.

### Derivation

A universal statement is true when every object satisfies it.

$$
\forall x\,P(x)
$$

It is false exactly when some object fails.

$$
\exists x\,\neg P(x)
$$

Apply this rule successively to nested quantifiers.

$$
\neg\forall x\exists y\,R(x,y)\equiv\exists x\forall y\,\neg R(x,y)
$$

### Interactive diagram

Switch relation tables. How does a witness in each row differ from a single column witnessing every row?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-quantifiers?view=visual

### Guided experiment

1. **Relation-table mode: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: a true cell in every row: true; an entirely true column: false.

2. **Relation-table mode: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: a true cell in every row: true; an entirely true column: true.

3. **Relation-table mode: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: a true cell in every row: false; an entirely true column: false.

### Worked examples

#### Example 1: Different witnesses

Two people each like only one dish, and their dishes differ. Does everyone liking something imply a shared favorite?

- Each row contains a true cell.
- No column is entirely true.

**Answer: No.**

#### Example 2: An empty domain

Is “Every element is positive” true on the empty set?

- A false universal statement requires a counterexample in the set.
- The empty set has no counterexample.

**Answer: True; the claim that a positive element exists in the empty set is false.**

### Common mistakes

- **Quantifiers can be exchanged freely** Reordering mixed quantifiers changes witness dependencies.

- **The domain does not matter** Truth depends on the objects being considered.

### Exercises and solutions

**1. Negate $\exists x\,P(x)$.**

Hint: No object satisfies the property.

Answer: $\forall x\,\neg P(x)$.

- Every object fails the property.

**2. Is $\forall x\exists y:y>x$ true over the integers?**

Hint: Construct a witness depending on the preceding variable.

Answer: True.

- Take $y=x+1$.

**3. Is $\exists y\forall x:y>x$ true over the integers?**

Hint: Choose an integer greater than the proposed fixed witness.

Answer: False.

- Given $y$, take $x=y+1$.

**4. Can a single counterexample refute a universal statement?**

Hint: A universal statement permits no exceptions.

Answer: Yes.

- One failing object suffices.

Prerequisites: Propositions and logical connectives.

## 1.4 Direct proofs, cases, and counterexamples

*A proof establishes a conclusion from its hypotheses. A counterexample refutes a universal claim.*

### The idea

A proof establishes a conclusion from its hypotheses. A counterexample refutes a universal claim.

### Intuition

A hundred examples may suggest a pattern, but a general theorem needs an argument covering every allowed object.

### Another explanation

An infinite domain requires a general argument.

### Quick check

Must a counterexample satisfy the original claim's hypotheses?

A. Yes
B. No
C. Only the conclusion matters

Answer: A. Otherwise it lies outside the claim's scope.

### Start with definitions

To prove that two even integers have an even sum, write each as twice an integer and factor two from their sum.

### Cover every case

Cases must cover all possibilities. Overlap is allowed; omissions are not. Integer parity gives exactly two mutually exclusive cases.

### Locate an error with a counterexample

One valid counterexample refutes a universal claim. It must satisfy the hypotheses; an object outside the domain cannot refute the claim.

### Definition and conditions

Every step in a valid proof follows from hypotheses, definitions, or established results.

$$
a=2r,\ b=2s\implies a+b=2(r+s)
$$

- Parity arguments here concern integers.

### Derivation

Express an even integer using its definition.

$$
a=2r,\ b=2s,\quad r,s\in\mathbb Z
$$

Substitute into the expression to be studied.

$$
a+b=2r+2s
$$

The expression in parentheses is still an integer.

$$
a+b=2(r+s)
$$

### Interactive diagram

Change the integer. How do the parity cases cover every possibility?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-direct-proof?view=visual

### Guided experiment

1. **Current integer: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: integer $1$; parity: odd; square's parity: odd.

2. **Current integer: 6** Set the control to $6$. Observe which objects, relations, or counts change.

Preset observation: At this setting: integer $6$; parity: even; square's parity: even.

3. **Current integer: 12** Set the control to $12$. Observe which objects, relations, or counts change.

Preset observation: At this setting: integer $12$; parity: even; square's parity: even.

### Worked examples

#### Example 1: Parity of a square

Prove that an integer and its square have the same parity.

- An even integer $2k$ has square $4k^2$.
- An odd integer $2k+1$ has square $2(2k^2+2k)+1$.

**Answer: The claim holds in both cases.**

#### Example 2: A false universal claim

What is wrong with “Every odd integer is prime”?

- Nine is odd.
- Nine factors as three times three.

**Answer: Nine is a counterexample.**

### Common mistakes

- **Enough examples constitute a proof** An infinite domain requires a general argument.

- **Proof by cases may omit small cases** Every allowed object must belong to at least one case.

### Exercises and solutions

**1. Is the product of three consecutive integers divisible by three?**

Hint: Classify their remainders on division by three.

Answer: Yes.

- Exactly one of the three consecutive remainders is zero.

**2. Give a counterexample to “Every even integer is composite.”**

Hint: Use the only even prime.

Answer: Two.

- Two has exactly two positive divisors: one and itself.

**3. Can checking the first ten integers prove a claim about all integers?**

Hint: Does the finite check cover the domain?

Answer: No.

- An unchecked object could still fail.

**4. Prove that the sum of two odd integers is even.**

Hint: Write each as twice an integer plus one.

Answer: The sum is even.

- $(2r+1)+(2s+1)=2(r+s+1)$.

Prerequisites: Propositions and logical connectives.

## 1.5 Contraposition and contradiction

*When a direct proof is difficult, rule out a true hypothesis with a false conclusion.*

### The idea

When a direct proof is difficult, rule out a true hypothesis with a false conclusion.

### Intuition

Contraposition proves an equivalent implication. Contradiction temporarily assumes the negated conclusion and derives an impossibility.

### Another explanation

The contrapositive is equivalent; the converse need not be.

### Quick check

Which statement is equivalent to the original implication?

A. Converse
B. Contrapositive
C. Inverse

Answer: B. They exclude the same assignment.

### Use the contrapositive

To prove that an even square has an even integer root, prove that an odd integer has an odd square. Contraposition does more than exchange antecedent and consequent.

### State the contradiction assumption

To prove irrationality, assume a fraction of coprime integers represents the number, then derive a common factor of its numerator and denominator.

### Check where the contradiction comes from

The contradiction must depend on the added negated assumption, with every other step justified. Do not assume the desired conclusion.

### Definition and conditions

In classical logic, an implication is equivalent to its contrapositive.

$$
(p\to q)\equiv(\neg q\to\neg p)
$$

- This lesson uses classical logic.
- Represent a rational number with coprime integer numerator and denominator.

### Derivation

An implication fails only when its antecedent is true and its consequent false.

$$
p\land\neg q
$$

Its contrapositive fails under exactly the same assignment.

$$
\neg q\land p
$$

They therefore have identical truth values.

$$
p\to q\equiv\neg q\to\neg p
$$

### Interactive diagram

Compare an implication, its converse, and its contrapositive. Which truth-table columns match everywhere?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-contradiction?view=visual

### Guided experiment

1. **Comparison mode: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: counterexample rows $0$.

2. **Comparison mode: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: counterexample rows $2$.

3. **Comparison mode: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: counterexample rows $0$.

### Worked examples

#### Example 1: An even square

Prove that an integer whose square is even must be even.

- Assume the integer is odd and write it as $2k+1$.
- Its square is $2(2k^2+2k)+1$, which is odd.
- Thus an even square cannot come from an odd integer.

**Answer: The integer is even.**

#### Example 2: The irrationality of the square root of two

Prove that $\sqrt2$ is irrational.

- Assume $\sqrt2=a/b$, with $\gcd(a,b)=1,b\ne0$.
- $a^2=2b^2$, so $a=2c$.
- Substitution gives $b^2=2c^2$, so $b$ is also even, contradicting coprimality.

**Answer: $\sqrt2$ is irrational.**

### Common mistakes

- **The converse is always equivalent** The contrapositive is equivalent; the converse need not be.

- **A contradiction proof may use the conclusion circularly** Temporarily assume its negation and derive a contradiction through justified steps.

### Exercises and solutions

**1. What is the converse of $p\to q$?**

Hint: Exchange the antecedent and consequent.

Answer: $q\to p$; it need not be equivalent.

- It becomes $q\to p$.

**2. Does contraposition merely exchange the hypothesis and conclusion?**

Hint: Both must also be negated.

Answer: No.

- Exchanging them alone gives the converse.

**3. Prove that there is no largest integer.**

Hint: Assume there is a largest integer, then add one.

Answer: There is no largest integer.

- If $M$ is largest, $M+1$ is larger.

**4. Why choose a fraction in lowest terms in the proof about the square root of two?**

Hint: Which condition does the final contradiction violate?

Answer: It makes the derived common factor a contradiction.

- A common factor of two conflicts with coprimality.

Prerequisites: Direct proofs, cases, and counterexamples, Truth tables and logical equivalence.

## Chapter review

Try independently before reading the solutions.

**1. Negate “Everyone likes some dish,” and explain whether “some dish” may depend on the person.**

Hint: Keep the quantifier order and negate each quantifier.

Answer: Someone likes no dish. The original does not require a shared dish.

- The original statement is $\forall x\exists y\,L(x,y)$.
- Its negation is $\exists x\forall y\,\neg L(x,y)$; the original witness may depend on the person.

**2. Prove that an odd integer has an odd square, and state the contrapositive.**

Hint: Write the integer as twice an integer plus one.

Answer: Both statements hold.

- $(2k+1)^2=2(2k^2+2k)+1$.
- Contrapositive: an integer with an even square is even.

# Chapter 2 · Sets, functions, and relations

Specify objects and correspondence rules.

Goals:
- Perform set operations
- Represent a relation
- Recognize partial orders

## 2.1 Set operations and power sets

*A set ignores order and records each element only once.*

### The idea

A set ignores order and records each element only once.

### Intuition

Sets record membership. Lists also preserve positions and repetitions.

### Another explanation

A set records only whether an element belongs.

### Quick check

How many elements are in the empty set's power set?

A. Zero
B. One
C. Two

Answer: B. The empty set has exactly one subset: itself.

### Perform set operations

Intersection keeps shared elements; union keeps elements in either set; difference keeps those only in the left set. A complement requires a specified universe.

### Distinguish elements from subsets

An element belonging to a set differs from every element of one set belonging to another. The empty set is a subset of every set.

### Count the power set

The power set contains all subsets. Each element of a finite set is either selected or omitted, giving two to the number of elements subsets.

### Definition and conditions

The elements of a power set are subsets of the original set.

$$
\mathcal P(A)=\{B:B\subseteq A\},\quad |\mathcal P(A)|=2^{|A|}
$$

- The power-set counting formula assumes a finite set.
- Complements are relative to a specified universe.

### Derivation

Give each element an include-or-omit switch.

$$
\mathbf1_B(a)\in\{0,1\}
$$

Each switch configuration determines exactly one subset.

$$
B\longleftrightarrow(\mathbf1_B(a))_{a\in A}
$$

Multiply the independent choices.

$$
|\mathcal P(A)|=2^{|A|}
$$

### Interactive diagram

Switch set operations. Which elements remain?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-sets?view=visual

### Guided experiment

1. **Set-operation mode: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: elements in the result $2$.

2. **Set-operation mode: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: elements in the result $6$.

3. **Set-operation mode: 3** Set the control to $3$. Observe which objects, relations, or counts change.

Preset observation: At this setting: elements in the result $4$.

### Worked examples

#### Example 1: Set difference

For $A=\{1,2,3\},B=\{2,4\}$, find $A\setminus B$.

- One and three occur only on the left.
- Two is excluded because it belongs to the right set.

**Answer: $\{1,3\}$.**

#### Example 2: The empty set's power set

How many subsets does the empty set have?

- The only selection is to choose no elements.
- The empty set itself is one subset.

**Answer: $\mathcal P(\varnothing)=\{\varnothing\}$ has one element.**

### Common mistakes

- **Sets preserve repetitions** A set records only whether an element belongs.

- **The power set of the empty set is empty** It contains the empty set as one element.

### Exercises and solutions

**1. How many subsets does a five-element set have?**

Hint: Include or omit each element.

Answer: Thirty-two.

- $2^5=32$.

**2. Does writing the same element three times enlarge a set?**

Hint: Does a set record multiplicity?

Answer: No.

- Membership has not changed.

**3. Is $A\setminus B$ always equal to $B\setminus A$?**

Hint: Try distinct singleton sets.

Answer: Not necessarily.

- They differ for $A=\{1\},B=\{2\}$.

**4. Can a complement be defined without a universe?**

Hint: Where should all the “missing” elements come from?

Answer: No.

- The collection of allowed objects must be specified first.

Prerequisites: Elementary algebra.

## 2.2 Functions, injections, and surjections

*A function gives each input one output. An injection has no collisions; a surjection reaches every target.*

### The idea

A function gives each input one output. An injection has no collisions; a surjection reaches every target.

### Intuition

Each domain point needs exactly one outgoing arrow. A target point may have no incoming arrows.

### Another explanation

They coincide only for a surjection.

### Quick check

Does injectivity alone guarantee an inverse on the entire codomain?

A. Yes
B. No
C. Yes, if the sets are nonempty

Answer: B. Some target points may not be reached.

### Recognize a function

An input with no output, or with two different outputs, violates the function definition. The codomain is the specified target set; the image is the part actually reached.

### Distinguish injectivity and surjectivity

Injectivity means distinct inputs have distinct outputs. Surjectivity means every codomain point is reached; changing the codomain can change surjectivity.

### Inverses and composition

A bijection has an inverse on its entire codomain. In a composition, apply the right-hand function first; its outputs must belong to the left-hand function's domain.

### Definition and conditions

A bijection is both injective and surjective.

$$
(g\circ f)(x)=g(f(x)),\quad f^{-1}(f(x))=x\quad\text{if }f\text{ is bijective}
$$

- Composition requires compatible input and output sets.
- The two inverse identities require a bijection.

### Derivation

Injectivity gives at most one preimage.

$$
f(x)=f(y)\implies x=y
$$

Surjectivity gives every target at least one preimage.

$$
\forall b\in B\ \exists a\in A:f(a)=b
$$

Together they give exactly one.

$$
\forall b\in B\ \exists!a\in A:f(a)=b
$$

### Interactive diagram

Change the mapping rule. Which patterns cause collisions or missed targets?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-functions?view=visual

### Guided experiment

1. **Mapping mode: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: injective: yes; surjective: yes.

2. **Mapping mode: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: injective: no; surjective: no.

3. **Mapping mode: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: injective: yes; surjective: no.

### Worked examples

#### Example 1: Same formula, different codomain

For $f(x)=x^2$ on the reals, what changes if the codomain is the reals versus the nonnegative reals?

- Neither choice is injective: positive and negative inputs can have the same square.
- It is not onto the reals, but is onto the nonnegative reals.

**Answer: The codomain affects surjectivity.**

#### Example 2: Order of composition

For $f(x)=x+1,g(x)=2x$, compute both compositions.

- $g(f(x))=2x+2$.
- $f(g(x))=2x+1$.

**Answer: Composition generally does not commute.**

### Common mistakes

- **The image always equals the codomain** They coincide only for a surjection.

- **Composition order can be reversed freely** Both the resulting values and the domain may change.

### Exercises and solutions

**1. Can a three-element set inject into a two-element set?**

Hint: Use the pigeonhole principle.

Answer: No.

- Three inputs sharing two possible outputs force a collision.

**2. Can a two-element set map onto a three-element set?**

Hint: How many targets can be reached?

Answer: No.

- Two inputs reach at most two targets.

**3. Find the inverse of $f(x)=3x-2$ on the reals.**

Hint: Solve for the input in terms of the output.

Answer: $f^{-1}(y)=\frac{y+2}{3}$.

- $y=3x-2\implies x=(y+2)/3$.

**4. Between finite sets of equal size, does injectivity imply surjectivity?**

Hint: How many points are reached without collisions?

Answer: Yes.

- The image has the domain's size, which equals the codomain's size.

Prerequisites: Set operations and power sets.

## 2.3 Binary relations and relation matrices

*A relation records which ordered pairs hold, allowing more associations than a function.*

### The idea

A relation records which ordered pairs hold, allowing more associations than a function.

### Intuition

In a relation matrix, rows are starting objects and columns are destination objects; a true cell marks a related pair.

### Another explanation

Antisymmetry permits loops, and permits two-way links only at the same object.

### Quick check

Can symmetry and antisymmetry both hold?

A. No
B. Yes
C. Not for a nonempty relation

Answer: B. The identity relation is an example.

### Represent a relation

A binary relation on a set is a subset of its Cartesian square. An object may relate to several objects or to none.

### Check its properties

Reflexivity requires every diagonal cell. Symmetry requires matching mirror cells. Antisymmetry forbids two-way links between distinct objects, but permits loops.

### Find the transitive closure

Transitivity requires a direct relation whenever two relation steps connect a pair. Transitive closure adds every pair joined by a positive-length path; reflexive transitive closure also includes length-zero paths.

### Definition and conditions

Transitivity lets every two-step relation be replaced by one step.

$$
R\subseteq A\times A,\quad xRy\land yRz\implies xRz
$$

- Antisymmetry permits two-way relations when both objects are the same.
- Transitive and reflexive transitive closures use different allowed path lengths.

### Derivation

The matrix records one-step relations.

$$
M_{ij}=\mathbf1_{iRj}
$$

Boolean multiplication records two-step reachability.

$$
(M^{[2]})_{ij}=\bigvee_k(M_{ik}\land M_{kj})
$$

Combine all positive-length paths.

$$
R^+=\bigcup_{k\ge1}R^k
$$

### Interactive diagram

Switch relation modes. Is the matrix reflexive, symmetric, and transitive?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-relations?view=visual

### Guided experiment

1. **Relation mode: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: reflexive: yes; symmetric: no; transitive: yes.

2. **Relation mode: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: reflexive: yes; symmetric: yes; transitive: no.

3. **Relation mode: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: reflexive: yes; symmetric: no; transitive: no.

### Worked examples

#### Example 1: Symmetry and antisymmetry

Can the identity relation, containing only diagonal pairs, be both symmetric and antisymmetric?

- Every two-way relation concerns the same object.
- Both definitions are satisfied.

**Answer: Yes. These properties are not negations of each other.**

#### Example 2: A missing edge

If $1R2,2R3$ but not $1R3$, is the relation transitive?

- The first two relations satisfy the premise of transitivity.
- The required conclusion fails.

**Answer: It is not transitive; the missing edge must be added.**

### Common mistakes

- **Antisymmetric means asymmetric** Antisymmetry permits loops, and permits two-way links only at the same object.

- **Closure stops after adding two-step edges** Added edges can create longer connections; the full closure is required.

### Exercises and solutions

**1. How many binary relations exist on a three-element set?**

Hint: Each of nine ordered pairs can be included or omitted.

Answer: Five hundred twelve.

- $2^9=512$.

**2. Is the empty relation transitive?**

Hint: Can both premises ever hold?

Answer: Yes.

- There is no two-step premise, so no violation occurs.

**3. May an antisymmetric relation have loops?**

Hint: Antisymmetry restricts distinct objects.

Answer: Yes.

- An object may relate to itself.

**4. Does the transitive closure of a directed three-cycle contain loops?**

Hint: Three steps return to the starting point.

Answer: Yes.

- Each vertex has a positive-length closed walk.

Prerequisites: Set operations and power sets.

## 2.4 Equivalence relations and partitions

*An equivalence relation divides objects into disjoint classes.*

### The idea

An equivalence relation divides objects into disjoint classes.

### Intuition

Belonging to the same class does not mean being equal; it means the chosen rule does not distinguish the objects.

### Another explanation

Equivalence depends on the specified rule.

### Quick check

What happens if two equivalence classes intersect?

A. Only their intersections coincide
B. The entire classes coincide
C. The relation ceases to be reflexive

Answer: B. Symmetry and transitivity connect the classes through their shared member.

### Check three properties

Equivalence requires reflexivity, symmetry, and transitivity. Being “very close” is usually not transitive, so it does not automatically define equivalence.

### Form equivalence classes

An object's class contains everything equivalent to it. If two classes share an element, symmetry and transitivity force them to coincide.

### Recover a relation from a partition

Given nonempty, pairwise disjoint blocks covering the universe, define equivalence as membership in the same block. This recovers exactly the original partition.

### Definition and conditions

Congruence modulo a positive integer is a standard equivalence relation.

$$
[a]_m=\{b\in\mathbb Z:m\mid(a-b)\}
$$

- The modulus is a positive integer.
- Partition blocks are nonempty, disjoint, and cover the universe.

### Derivation

An object's difference from itself is zero.

$$
m\mid(a-a)
$$

Divisibility is preserved by negation.

$$
m\mid(a-b)\implies m\mid(b-a)
$$

Add the two differences.

$$
m\mid(a-b),\ m\mid(b-c)\implies m\mid(a-c)
$$

### Interactive diagram

Change the modulus. How are the same integers regrouped?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-equivalence-classes?view=visual

### Guided experiment

1. **Modulus: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: equivalence classes $2$.

2. **Modulus: 4** Set the control to $4$. Observe which objects, relations, or counts change.

Preset observation: At this setting: equivalence classes $4$.

3. **Modulus: 6** Set the control to $6$. Observe which objects, relations, or counts change.

Preset observation: At this setting: equivalence classes $6$.

### Worked examples

#### Example 1: Classify by remainders

Partition the integers from zero through seven modulo three.

- Remainder zero: $\{0,3,6\}$; remainder one: $\{1,4,7\}$.
- Remainder two: $\{2,5\}$.

**Answer: Three classes.**

#### Example 2: Closeness is not transitive

On the reals, does distance less than one define equivalence?

- Zero is close to $0.6$, and $0.6$ is close to $1.2$.
- Zero is not close to $1.2$.

**Answer: It is not an equivalence relation.**

### Common mistakes

- **Equivalent means equal** Equivalence depends on the specified rule.

- **Approximate equality always defines equivalence** Transitivity often fails.

### Exercises and solutions

**1. How many integer congruence classes are there modulo five?**

Hint: List the possible remainders.

Answer: Five.

- The remainders run from zero to four.

**2. Can distinct equivalence classes share an element?**

Hint: Use a shared element to connect the classes.

Answer: No.

- A shared element forces the two classes to coincide.

**3. Must elements of the same class have equal numerical values?**

Hint: Compare different congruent integers.

Answer: No.

- One and four are congruent modulo three but unequal.

**4. May a partition contain an empty block?**

Hint: Recall the nonempty-block requirement.

Answer: Not under this book's definition.

- An empty block is not any object's equivalence class.

Prerequisites: Binary relations and relation matrices.

## 2.5 Partial orders, Hasse diagrams, and lattices

*A partial order permits incomparable objects; a total order requires every pair to be comparable.*

### The idea

A partial order permits incomparable objects; a total order requires every pair to be comparable.

### Intuition

Under inclusion, two different singletons are incomparable, yet may still have a common upper bound.

### Another explanation

That is the additional requirement for a total order.

### Quick check

Is every maximal element greatest?

A. Yes
B. No
C. Yes, for every nonempty order

Answer: B. Several incomparable maximal elements may coexist.

### Recognize partial orders

A partial order is reflexive, antisymmetric, and transitive. Examples include numerical less-than-or-equal, set inclusion, and divisibility on positive integers.

### Read a Hasse diagram

For a finite partial order, omit loops and transitive edges, draw only covering relations, and place greater elements above. Missing direct edges do not imply incomparability: check upward paths.

### Distinguish maximal elements and lattices

A maximal element has nothing strictly above it. A greatest element is above every element. A lattice gives every pair a unique least upper bound and greatest lower bound.

### Definition and conditions

A power set ordered by inclusion is a lattice: union and intersection give the least upper bound and greatest lower bound.

$$
A\vee B=A\cup B,\qquad A\wedge B=A\cap B
$$

- Hasse diagrams here represent finite partial orders.
- A least upper bound is below every other upper bound.

### Derivation

The union contains both sets.

$$
A\subseteq A\cup B,\quad B\subseteq A\cup B
$$

Every common upper bound contains their union.

$$
A,B\subseteq C\implies A\cup B\subseteq C
$$

Dually, intersection gives the greatest lower bound.

$$
A\cap B\subseteq A,B
$$

### Interactive diagram

Change the number of base elements. How do covering edges and incomparable pairs change in the power-set lattice?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-partial-orders?view=visual

### Guided experiment

1. **Base-set size: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: subsets $2$; covering edges $1$.

2. **Base-set size: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: subsets $4$; covering edges $4$.

3. **Base-set size: 3** Set the control to $3$. Observe which objects, relations, or counts change.

Preset observation: At this setting: subsets $8$; covering edges $12$.

### Worked examples

#### Example 1: Incomparability

Compare $\{1\}$ and $\{2\}$ under inclusion.

- Each has an element missing from the other.
- Neither inclusion holds.

**Answer: They are incomparable.**

#### Example 2: Two meanings of “largest”

A partial order consists of two incomparable elements. How many maximal and greatest elements does it have?

- Neither element has anything strictly above it.
- Neither is above the other.

**Answer: Two maximal elements; no greatest element.**

### Common mistakes

- **Every pair in a partial order is comparable** That is the additional requirement for a total order.

- **Relations omitted from a Hasse diagram do not hold** Reflexive and transitive relations still hold.

### Exercises and solutions

**1. How many greatest elements does the power set of a three-element set have?**

Hint: Consider the set containing every base element.

Answer: One.

- The universe uniquely contains every subset.

**2. Under divisibility on positive integers, what is the greatest lower bound of six and ten?**

Hint: Find their greatest common divisor.

Answer: Two.

- $\gcd(6,10)=2$.

**3. Does the absence of a direct Hasse edge mean incomparability?**

Hint: There may be an upward path through other vertices.

Answer: No.

- Transitive edges are omitted; a path can still establish comparison.

**4. Can a partial order have two different greatest elements?**

Hint: Use antisymmetry.

Answer: No.

- If each is above the other, they are equal.

Prerequisites: Binary relations and relation matrices.

## Chapter review

Try independently before reading the solutions.

**1. Compare possible injections and surjections between a two-element set and a three-element set.**

Hint: Fix the direction, then count how many targets can be reached.

Answer: The direction determines what is possible.

- From two to three, injections exist but surjections do not; from three to two, surjections exist but injections do not.
- No bijection exists in either direction.

**2. Under divisibility on positive integers, find the greatest lower bound and least upper bound of twelve and eighteen.**

Hint: Find common divisors and common multiples, respectively.

Answer: Six and thirty-six.

- $\gcd(12,18)=6$.
- $\operatorname{lcm}(12,18)=36$.

# Chapter 3 · Integers and congruences

From divisibility to modular arithmetic.

Goals:
- Use the definition of divisibility
- Define primes
- Check invertibility

## 3.1 Divisibility, greatest common divisors, and least common multiples

*Divisibility requires an integer quotient. The greatest common divisor is the largest shared positive factor.*

### The idea

Divisibility requires an integer quotient. The greatest common divisor is the largest shared positive factor.

### Intuition

The gcd measures shared factors. The lcm is the smallest positive integer divisible by both numbers.

### Another explanation

Size does not guarantee an integer multiple.

### Quick check

What does coprime mean?

A. No common divisors
B. Greatest common divisor one
C. Both numbers prime

Answer: B. One is always a common divisor of positive integers.

### Use the definition of divisibility

An integer divides another if the latter equals the former times an integer. A nonzero divisor avoids division by zero.

### Combine divisibility relations

A common divisor of two integers divides every integer linear combination of them. This fact underlies the Euclidean algorithm.

### Connect gcd and lcm

For positive integers, gcd times lcm equals their product. Minimum and maximum prime-factor exponents explain why.

### Definition and conditions

The gcd is positive here; the lcm is used for positive integers.

$$
d\mid a\iff\exists k\in\mathbb Z:a=dk,\quad \gcd(a,b)\operatorname{lcm}(a,b)=ab
$$

- Both integers in the product formula are positive.

### Derivation

A common divisor divides each term.

$$
a=du,\quad b=dv
$$

Take any integer-coefficient linear combination.

$$
ra+sb=d(ru+sv)
$$

The expression in parentheses is still an integer.

$$
d\mid(ra+sb)
$$

### Interactive diagram

Change the two integers. How do their common divisors and lcm change?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-divisibility?view=visual

### Guided experiment

1. **First integer: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: gcd $1$; lcm $18$.

2. **First integer: 30** Set the control to $30$. Observe which objects, relations, or counts change.

Preset observation: At this setting: gcd $6$; lcm $90$.

3. **First integer: 60** Set the control to $60$. Observe which objects, relations, or counts change.

Preset observation: At this setting: gcd $6$; lcm $180$.

### Worked examples

#### Example 1: Find both quantities

Find the gcd and lcm of twelve and eighteen.

- $12=2^2\cdot3,18=2\cdot3^2$.
- The minimum exponents give six; the maximum exponents give thirty-six.

**Answer: Six and thirty-six.**

#### Example 2: A linear combination

If five divides an integer sum and one summand, must it divide the other summand?

- The other summand is the sum minus the known summand.
- A common divisor divides the difference.

**Answer: Yes.**

### Common mistakes

- **The smaller integer always divides the larger** Size does not guarantee an integer multiple.

- **Coprime integers must both be prime** Coprimality concerns the shared factors of a pair.

### Exercises and solutions

**1. What is the gcd of fifteen and twenty?**

Hint: List their common positive divisors.

Answer: Five.

- The common positive divisors are one and five.

**2. Must coprime integers both be prime?**

Hint: Find coprime composite numbers.

Answer: No.

- Eight and nine are coprime but both composite.

**3. Does six divide three?**

Hint: Is the quotient an integer?

Answer: No.

- Three divided by six is one half.

**4. What is the lcm of eight and twelve?**

Hint: Find the gcd first.

Answer: Twenty-four.

- $8\cdot12/4=24$.

Prerequisites: Direct proofs, cases, and counterexamples.

## 3.2 The Euclidean algorithm and Bézout's identity

*Repeated remainders preserve the gcd while reducing the problem.*

### The idea

Repeated remainders preserve the gcd while reducing the problem.

### Intuition

Removing an integer multiple leaves a remainder that retains the same common divisors.

### Another explanation

Integer quotients and remainders must be exact.

### Quick check

Which final quantity gives the gcd?

A. Last quotient
B. Final zero remainder
C. Last nonzero remainder

Answer: C. The final nonzero divisor is the common divisor.

### Preserve common divisors

Division with remainder writes the dividend as an integer multiple of the divisor plus a remainder. Dividing both original numbers is equivalent to dividing the divisor and remainder.

### Prove termination

Nonzero remainders are successively smaller nonnegative integers, so they cannot decrease forever. The last nonzero remainder is the gcd.

### Recover a linear combination

Substitute backward from the final step. Each remainder becomes an integer linear combination of the original inputs, giving Bézout coefficients.

### Definition and conditions

For integers not both zero, their gcd is an integer linear combination of them.

$$
\gcd(a,b)=\gcd(b,a\bmod b)=ax+by
$$

- The algorithm here takes positive integer inputs.
- Each remainder lies between zero and one less than the divisor.

### Derivation

Apply division with remainder.

$$
a=qb+r
$$

Common divisibility is preserved in both directions by subtraction.

$$
d\mid a,b\iff d\mid b,r
$$

Repeat until the remainder is zero.

$$
\gcd(a,b)=\text{last nonzero remainder}
$$

### Interactive diagram

Execute the remainder steps. Why is the gcd unchanged?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-euclid?view=visual

### Guided experiment

1. **Steps executed: 0** Set the control to $0$. Compare the current step with the complete reference result.

Preset observation: At this setting: steps executed $0$; total steps $3$.

2. **Steps executed: 5** Set the control to $5$. Compare the current step with the complete reference result.

Preset observation: At this setting: steps executed $3$; total steps $3$; gcd $6$.

3. **Steps executed: 10** Set the control to $10$. Compare the current step with the complete reference result.

Preset observation: At this setting: steps executed $3$; total steps $3$; gcd $6$.

### Worked examples

#### Example 1: Compute and substitute backward

Find the gcd of thirty and eighteen and express it as a linear combination.

- $30=18+12,18=12+6,12=2\cdot6$.
- $6=18-12=2\cdot18-30$.

**Answer: $\gcd=6=-30+2\cdot18$.**

#### Example 2: Does an integer solution exist?

Does $12x+18y=5$ have integer solutions?

- The left side is divisible by six.
- Five is not divisible by six.

**Answer: No integer solution exists.**

### Common mistakes

- **Decimal approximations suffice for this algorithm** Integer quotients and remainders must be exact.

- **Back-substitution coefficients are always unique** An integer linear combination generally has infinitely many coefficient pairs.

### Exercises and solutions

**1. What is the gcd of forty-eight and eighteen?**

Hint: Take successive remainders.

Answer: Six.

- $48\bmod18=12,18\bmod12=6$; the next remainder is zero.

**2. Are Bézout coefficients unique?**

Hint: Change the coefficient pair while preserving the combination.

Answer: No.

- For coprime inputs, adjust coefficients by multiples of the other input.

**3. Why does the algorithm terminate?**

Hint: In which set are remainders decreasing?

Answer: The remainders strictly decrease.

- Nonnegative integers cannot decrease strictly forever.

**4. Find integers solving $7x+5y=1$.**

Hint: Try small coefficients.

Answer: $(x,y)=(3,-4)$.

- $7\cdot3+5\cdot(-4)=1$.

Prerequisites: Divisibility, greatest common divisors, and least common multiples.

## 3.3 Primes and unique factorization

*Every integer greater than one factors into primes, uniquely apart from their order.*

### The idea

Every integer greater than one factors into primes, uniquely apart from their order.

### Intuition

Trial division need not pass the square root: two larger factors would have a product greater than the original number.

### Another explanation

One does not have exactly two positive divisors.

### Quick check

Why does trial division only need to reach the square root?

A. All factors are small
B. At least one nontrivial factor is no greater than the square root
C. Every prime is no greater than the square root

Answer: B. A factor pair cannot have both factors greater than the square root.

### Define primes

A prime has exactly two positive divisors: one and itself. One is not prime; otherwise arbitrary factors of one would destroy uniqueness.

### Understand Euclid's lemma

If a prime divides a product of two integers, it divides at least one factor. General composite integers do not have this property.

### Establish unique factorization

Existence follows by repeatedly factoring smaller composite integers. For uniqueness, Euclid's lemma matches the prime factors in two factorizations one by one.

### Definition and conditions

The fundamental theorem of arithmetic applies to positive integers greater than one.

$$
n=\prod_i p_i^{e_i},\quad e_i\ge1
$$

- The prime factors are distinct, with positive integer exponents.
- Uniqueness disregards the order of prime factors.

### Derivation

If a prime does not divide the first factor, they are coprime.

$$
p\nmid a\implies \gcd(p,a)=1
$$

Use Bézout's identity to express one.

$$
up+va=1
$$

Multiply by the second factor to obtain divisibility.

$$
b=upb+vab\implies p\mid b\ \text{if }p\mid ab
$$

### Interactive diagram

Increase the sieve's upper bound. Which numbers remain prime?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-primes?view=visual

### Guided experiment

1. **Sieve upper bound: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: primes $1$.

2. **Sieve upper bound: 51** Set the control to $51$. Observe which objects, relations, or counts change.

Preset observation: At this setting: primes $15$.

3. **Sieve upper bound: 100** Set the control to $100$. Observe which objects, relations, or counts change.

Preset observation: At this setting: primes $25$.

### Worked examples

#### Example 1: Factor sixty

Find the prime factorization of sixty.

- $60=2\cdot30=2^2\cdot15$.
- $15=3\cdot5$.

**Answer: $60=2^2\cdot3\cdot5$.**

#### Example 2: Why composites do not work

Six divides two times three. Must it divide either two or three?

- The product is six, so divisibility holds.
- Neither factor is divisible by six.

**Answer: No. The product-divisibility lemma requires a prime.**

### Common mistakes

- **One is the smallest prime** One does not have exactly two positive divisors.

- **The product-divisibility lemma holds for every integer** The composite number six already gives a counterexample.

### Exercises and solutions

**1. Is one prime?**

Hint: Count its positive divisors.

Answer: No.

- One has only one positive divisor.

**2. Which primes must be tested to establish that twenty-nine is prime?**

Hint: Its square root is less than six.

Answer: Two, three, and five.

- None of two, three, or five divides it.

**3. How many distinct prime factors does eighty-four have?**

Hint: Factor successively.

Answer: Three.

- $84=2^2\cdot3\cdot7$.

**4. Are there infinitely many primes?**

Hint: Assume a finite list and consider its product plus one.

Answer: Yes.

- That number is divisible by no listed prime, yet still has a prime divisor.

Prerequisites: The Euclidean algorithm and Bézout's identity, Contraposition and contradiction.

## 3.4 Congruences and modular arithmetic

*Modular arithmetic keeps only remainders, while addition and multiplication remain consistent.*

### The idea

Modular arithmetic keeps only remainders, while addition and multiplication remain consistent.

### Intuition

A clock returns to the same position after a full turn. Congruence records differences of whole turns.

### Another explanation

Negative integers also have standard nonnegative representatives.

### Quick check

Can a factor of two always be canceled modulo six?

A. Always
B. Not in general
C. Only for positive remainders

Answer: B. Two has no inverse modulo six.

### Understand congruence

Two integers are congruent when their difference is divisible by the modulus. Represent each class by its remainder from zero to one less than the modulus.

### Calculate modulo an integer

Congruences can be added, subtracted, and multiplied termwise. Division needs extra care: a canceled factor must be invertible modulo the modulus.

### Compute large powers

Repeated squaring with remainders avoids rapidly growing integers. Each step preserves congruence, not the original integer's size.

### Definition and conditions

The modulus is a positive integer; modulo one there is only one class.

$$
a\equiv b\pmod m\iff m\mid(a-b)
$$

- Interactive moduli in this book are at least two.
- Check invertibility before cancellation.

### Derivation

Write congruence as a difference that is a multiple of the modulus.

$$
a-b=km,\quad c-d=\ell m
$$

Split the difference of the products.

$$
ac-bd=a(c-d)+d(a-b)
$$

Both terms are divisible by the modulus.

$$
ac\equiv bd\pmod m
$$

### Interactive diagram

Change the integer and modulus. Where do negative values and multiple turns land?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-congruence?view=visual

### Guided experiment

1. **Current integer: -20** Set the control to $-20$. Observe which objects, relations, or counts change.

Preset observation: At this setting: standard remainder $0$; integer quotient $-4$.

2. **Current integer: 5** Set the control to $5$. Observe which objects, relations, or counts change.

Preset observation: At this setting: standard remainder $0$; integer quotient $1$.

3. **Current integer: 30** Set the control to $30$. Observe which objects, relations, or counts change.

Preset observation: At this setting: standard remainder $0$; integer quotient $6$.

### Worked examples

#### Example 1: Negative remainders

What is the standard representative of negative one modulo five?

- $-1=5(-1)+4$.
- The representative must be nonnegative and less than five.

**Answer: Four.**

#### Example 2: Invalid cancellation

Does $2x\equiv2\pmod6$ force $x\equiv1$?

- Both one and four have double congruent to two.
- Two and six are not coprime, so two is not invertible.

**Answer: No; the class of four is also a solution.**

### Common mistakes

- **Remainders only make sense for positive inputs** Negative integers also have standard nonnegative representatives.

- **Division is unrestricted in modular arithmetic** Only invertible elements permit division.

### Exercises and solutions

**1. What is the standard remainder of seventeen modulo five?**

Hint: Subtract a multiple of five.

Answer: Two.

- $17=3\cdot5+2$.

**2. What is the remainder of the square of seven modulo five?**

Hint: First reduce seven to two, then square.

Answer: Four.

- $7^2\equiv2^2=4$.

**3. Does congruence imply equality of integers?**

Hint: Two numbers may differ by a whole turn.

Answer: No.

- Two and seven are congruent modulo five but unequal.

**4. What is the standard remainder of negative seven modulo five?**

Hint: Choose the nonnegative representative.

Answer: Three.

- $-7=5(-2)+3$.

Prerequisites: Divisibility, greatest common divisors, and least common multiples, Truth tables and logical equivalence.

## 3.5 Modular inverses and the Chinese remainder theorem

*Coprimality gives inverses and lets two remainder conditions determine a unique class modulo the product.*

### The idea

Coprimality gives inverses and lets two remainder conditions determine a unique class modulo the product.

### Intuition

Follow the arithmetic progression satisfying the first congruence, then find where it also satisfies the second.

### Another explanation

Compatible remainders can still have solutions.

### Quick check

What is the necessary and sufficient condition for invertibility?

A. The integer is less than the modulus
B. The integer and modulus are coprime
C. The modulus is even

Answer: B. Bézout proves sufficiency; the inverse equation also proves necessity.

### Check invertibility

An integer is invertible modulo a given modulus exactly when they are coprime. Its coefficient in Bézout's identity, reduced modulo that modulus, is an inverse.

### Combine coprime moduli

For coprime moduli, repeatedly adding the first modulus visits every residue modulo the second. A common solution therefore exists and is unique modulo the product.

### Handle noncoprime moduli

A solution exists only when the difference of the remainders is divisible by the gcd of the moduli. If compatible, the solution is unique modulo the lcm.

### Definition and conditions

Uniqueness modulo the product in the Chinese remainder theorem requires pairwise coprime moduli.

$$
\gcd(m,n)=1\implies x\equiv a\pmod m,\ x\equiv b\pmod n\text{ is unique modulo }mn\text{}
$$

- Moduli are positive integers.
- Check compatibility when the moduli are not coprime.

### Derivation

Parameterize the first congruence.

$$
x=a+mt
$$

Substitute into the second.

$$
mt\equiv b-a\pmod n
$$

Use an inverse to solve for the parameter.

$$
t\equiv m^{-1}(b-a)\pmod n
$$

### Interactive diagram

Change the remainders modulo three and five. How does their unique intersection move?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-crt?view=visual

### Guided experiment

1. **Remainder modulo three: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: least nonnegative solution $3$.

2. **Remainder modulo three: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: least nonnegative solution $13$.

3. **Remainder modulo three: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: least nonnegative solution $8$.

### Worked examples

#### Example 1: Combine two remainders

$x\equiv2\pmod3,\ x\equiv3\pmod5$.

- $x=2+3t$, so $3t\equiv1\pmod5$.
- The inverse of three is two, so $t\equiv2\pmod5$.

**Answer: $x\equiv8\pmod{15}$.**

#### Example 2: Incompatible conditions

Can $x\equiv0\pmod2,\ x\equiv1\pmod4$ both hold?

- The first requires an even integer.
- The second requires an odd integer; the remainder difference is not divisible by two.

**Answer: No solution.**

### Common mistakes

- **Noncoprime moduli always give no solution** Compatible remainders can still have solutions.

- **A solvable system has just one integer solution** Uniqueness concerns a residue class, not a single integer.

### Exercises and solutions

**1. What is the inverse of three modulo seven?**

Hint: Find a product with remainder one.

Answer: Five.

- $3\cdot5=15\equiv1\pmod7$.

**2. Does four have an inverse modulo six?**

Hint: Compute the gcd first.

Answer: No.

- The gcd is two.

**3. Find the least nonnegative solution of $x\equiv1\pmod2,\ x\equiv2\pmod3$.**

Hint: List odd integers.

Answer: Five.

- One and three fail; five works.

**4. Do noncoprime moduli always make a system unsolvable?**

Hint: Consider two zero remainders.

Answer: No; compatibility must be checked.

- Zero satisfies both zero congruences.

Prerequisites: The Euclidean algorithm and Bézout's identity, Congruences and modular arithmetic.

## Chapter review

Try independently before reading the solutions.

**1. Use the Euclidean algorithm to find the gcd of forty-two and thirty, then substitute backward.**

Hint: First find remainders twelve and six.

Answer: Six.

- $42=30+12,30=2\cdot12+6$.
- $6=30-2(42-30)=3\cdot30-2\cdot42$.

**2. Solve $x\equiv1\pmod3,\ x\equiv2\pmod5$.**

Hint: Write all solutions to the first congruence first.

Answer: $x\equiv7\pmod{15}$.

- $x=1+3t$, giving $3t\equiv1\pmod5$, hence $t\equiv2\pmod5$.
- $x\equiv7\pmod{15}$.

# Chapter 4 · Induction, recursion, and algorithms

Use finite arguments to cover infinitely many cases.

Goals:
- Choose the starting case
- Distinguish objects from representations
- Define an upper bound

## 4.1 Mathematical induction

*Check a starting case, then prove that each case passes the result to its successor.*

### The idea

Check a starting case, then prove that each case passes the result to its successor.

### Intuition

Induction does not guess the next case from a few examples. It proves that every step connects to the next.

### Another explanation

The chain needs a starting point.

### Quick check

Does the base case alone complete an induction proof?

A. Yes
B. A general inductive step is also needed
C. Checking ten more terms suffices

Answer: B. Finitely many starting cases cannot replace an arbitrary inductive step.

### Choose the starting case

If a statement starts at a specified integer, verify that starting case. The inductive step must then hold at every index from that point onward.

### Use the induction hypothesis

Assume the statement at an arbitrary fixed current index only to prove it at the next. Do not assume the next case too.

### Isolate the change

For sum identities, separate the last summand. For inequalities, check whether the added term can be controlled by the induction hypothesis.

### Definition and conditions

The statement is defined for all integers at or above its starting index.

$$
P(n_0),\quad \forall k\ge n_0\,[P(k)\to P(k+1)]\implies\forall n\ge n_0\,P(n)
$$

- The base case and the range of the inductive step must connect.

### Derivation

Verify the base case.

$$
1=1\cdot2/2
$$

Separate the next term and substitute the induction hypothesis.

$$
\sum_{i=1}^{k+1}i=\frac{k(k+1)}2+(k+1)
$$

Factor to obtain the desired expression.

$$
\sum_{i=1}^{k+1}i=\frac{(k+1)(k+2)}2
$$

### Interactive diagram

Increase the number of terms. How does the new border enlarge the square by one layer?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-induction?view=visual

### Guided experiment

1. **Current layer: 1** Set the control to $1$. Compare the current step with the complete reference result.

Preset observation: At this setting: total cells $1$; new cells in this layer $1$.

2. **Current layer: 5** Set the control to $5$. Compare the current step with the complete reference result.

Preset observation: At this setting: total cells $25$; new cells in this layer $9$.

3. **Current layer: 10** Set the control to $10$. Compare the current step with the complete reference result.

Preset observation: At this setting: total cells $100$; new cells in this layer $19$.

### Worked examples

#### Example 1: Sum of odd integers

Prove that the first $n$ positive odd integers sum to $n^2$.

- The base case $n=1$ holds.
- If the first $k$ terms sum to $k^2$, add $2k+1$.
- $k^2+2k+1=(k+1)^2$.

**Answer: The identity holds for every positive integer.**

#### Example 2: A missing base case

“If an integer exceeds one, its successor exceeds one.” Does this prove that every nonnegative integer exceeds one?

- The inductive step holds.
- The starting case zero fails.

**Answer: No; a valid base case is missing.**

### Common mistakes

- **A valid step makes the base case unnecessary** The chain needs a starting point.

- **The next case may be assumed** That would assume the desired conclusion circularly.

### Exercises and solutions

**1. Which base case should be checked for induction starting at three?**

Hint: Match the statement's domain.

Answer: Three.

- Verify three.

**2. Find the sum of the first ten positive odd integers.**

Hint: Use the square formula.

Answer: One hundred.

- $10^2=100$.

**3. Does the induction hypothesis permanently accept an unproved conclusion?**

Hint: It is a temporary assumption in a conditional argument.

Answer: No.

- It proves the implication between arbitrary consecutive cases, which is then combined with the base case.

**4. If the first two cases hold, can a step advancing by two suffice?**

Hint: Separate odd and even chains.

Answer: Yes, provided both chains have a base case.

- Two base cases covering the two parities let two-step induction reach every index.

Prerequisites: Direct proofs, cases, and counterexamples.

## 4.2 Strong induction and well-ordering

*When the next case needs several smaller cases, assume all preceding cases in the inductive step.*

### The idea

When the next case needs several smaller cases, assume all preceding cases in the inductive step.

### Intuition

Recursion may split a problem into two nonconsecutive smaller ones. Strong induction supplies both needed results.

### Another explanation

Only strictly smaller indices are used.

### Quick check

How are strong and ordinary induction related?

A. Unrelated
B. Strong induction requires a stronger axiom
C. Equivalent on the nonnegative integers

Answer: C. Combine all preceding statements into a single new statement to convert one form to the other.

### Strengthen the hypothesis

Strong induction assumes every case from the starting index through the current index. It is equivalent to ordinary induction, not a stronger axiom.

### Check that subproblems are smaller

To factor an integer greater than one into primes, split a composite into two strictly smaller factors greater than one, then apply strong induction.

### Use a least counterexample

If failing positive integers exist, well-ordering gives a least one. If smaller successful cases imply its success, a contradiction follows.

### Definition and conditions

Every nonempty set of nonnegative integers has a least element. This cannot be applied directly to all integers.

$$
\bigl[\forall j,\ n_0\le j\le k:\ P(j)\bigr]\implies P(k+1)
$$

- Specify the base cases and the smallest indices produced by the decomposition.

### Derivation

Assume a counterexample exists and choose the least.

$$
m=\min\{n\ge n_0:\neg P(n)\}
$$

Minimality ensures every smaller case holds.

$$
n_0\le j<m\implies P(j)
$$

If the inductive argument proves this case, there is a contradiction.

$$
P(m)\land\neg P(m)
$$

### Interactive diagram

Increase the target integer. Which values can be formed from threes and fours?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-strong-induction?view=visual

### Guided experiment

1. **Target integer: 0** Set the control to $0$. Compare the current step with the complete reference result.

Preset observation: At this setting: target reachable: yes.

2. **Target integer: 15** Set the control to $15$. Compare the current step with the complete reference result.

Preset observation: At this setting: target reachable: yes.

3. **Target integer: 30** Set the control to $30$. Compare the current step with the complete reference result.

Preset observation: At this setting: target reachable: yes.

### Worked examples

#### Example 1: Postage combinations

Prove that every integer at least six is a nonnegative integer combination of three and four.

- Six, seven, and eight are three plus three, three plus four, and four plus four.
- For a number at least nine, subtracting three leaves at least six.
- Apply strong induction and add one more three.

**Answer: Every such integer is representable.**

#### Example 2: Existence of a prime divisor

Prove that every integer greater than one has a prime divisor.

- Two is prime.
- A larger prime already qualifies; a composite has a strictly smaller factor greater than one.
- Apply strong induction to that factor.

**Answer: A prime divisor exists.**

### Common mistakes

- **A stronger induction hypothesis makes the proof circular** Only strictly smaller indices are used.

- **All integers are well-ordered** An integer subset unbounded below may have no least element.

### Exercises and solutions

**1. What is the largest nonnegative integer not representable using threes and fours?**

Hint: Check zero through eight, then use the add-three rule.

Answer: Five.

- Five fails; six, seven, and eight work, and later values follow by adding three.

**2. Does the set of negative integers have a least element?**

Hint: Subtract one from any proposed element.

Answer: No.

- There is always a smaller negative integer.

**3. Why may strong induction require several base cases?**

Hint: The recurrence may skip indices.

Answer: To cover all initial gaps.

- Every skipped-index chain must enter the valid range.

**4. May a least-counterexample proof omit justification that a least counterexample exists?**

Hint: It depends on the domain's well-ordering property.

Answer: No.

- A lower-bound condition for integers cannot be omitted.

Prerequisites: Mathematical induction.

## 4.3 Recursive definitions and structural induction

*Specify basic objects, then rules for building new objects from existing ones.*

### The idea

Specify basic objects, then rules for building new objects from existing ones.

### Intuition

Induction can follow the construction of expressions or trees, not just a sequence of integers.

### Another explanation

Fullness requires exactly two children at every internal vertex.

### Quick check

Does “at most two children per vertex” imply one more leaf than internal vertices?

A. Yes
B. No
C. Only for trees of height greater than two

Answer: B. A chain of single-child vertices is a counterexample.

### Distinguish objects from representations

The same value may have several recursive constructions. State whether the proof concerns the construction tree or its resulting object.

### Require finite construction

A full binary tree starts with one leaf. Joining two existing trees beneath a new root gives another tree. Every internal vertex has exactly two children.

### Prove along the construction

Verify the basic object, then assume the property for two subobjects and prove it for their combination. Structural induction requires every object to be finitely generated by the rules.

### Definition and conditions

A finite full binary tree has one more leaf than internal vertices.

$$
L=I+1
$$

- The tree is finite.
- Every internal vertex has exactly two children.

### Derivation

The one-leaf tree satisfies the claim.

$$
L=1,\ I=0
$$

Join two full binary trees.

$$
L=L_1+L_2,\quad I=I_1+I_2+1
$$

Substitute the two induction hypotheses.

$$
L=(I_1+1)+(I_2+1)=I+1
$$

### Interactive diagram

Increase the number of complete levels. How do the internal-vertex and leaf counts grow together?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-recursive-structures?view=visual

### Guided experiment

1. **Tree depth: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: leaves $1$; internal vertices $0$.

2. **Tree depth: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: leaves $4$; internal vertices $3$.

3. **Tree depth: 4** Set the control to $4$. Observe which objects, relations, or counts change.

Preset observation: At this setting: leaves $16$; internal vertices $15$.

### Worked examples

#### Example 1: Count leaves

A finite full binary tree has seven internal vertices. How many leaves does it have?

- Each internal vertex has exactly two children.
- $L=I+1=8$.

**Answer: Eight.**

#### Example 2: Why fullness matters

Does a binary tree consisting of a root and one child satisfy the formula?

- It has one internal vertex and one leaf.
- One is not one plus one.

**Answer: No. A binary tree need not be full.**

### Common mistakes

- **Every binary tree is full** Fullness requires exactly two children at every internal vertex.

- **Recursive definitions need no basic objects** Without a starting rule, no finite objects may be generated.

### Exercises and solutions

**1. A full binary tree has four leaves. How many vertices does it have in total?**

Hint: There is one fewer internal vertex than leaves.

Answer: Seven.

- $I=3,L+I=7$.

**2. Is a one-vertex tree a basic recursive object?**

Hint: The basic rule permits a single leaf.

Answer: Yes.

- It needs no further combination.

**3. Does structural induction need only check the root?**

Hint: It must connect properties of substructures.

Answer: No.

- The construction rule depends on every immediate substructure.

**4. Can this lesson's conclusion be applied directly to an infinite recursive construction?**

Hint: Where is finiteness used?

Answer: Not directly.

- Finite generation is a hypothesis of this structural induction.

Prerequisites: Strong induction and well-ordering.

## 4.4 Loop invariants and termination

*Correctness requires both a property preserved at every step and a reason the process must end.*

### The idea

Correctness requires both a property preserved at every step and a reason the process must end.

### Intuition

An invariant keeps the computation on track. A strictly decreasing quantity rules out endless execution.

### Another explanation

The unchanged property is a relation among state variables.

### Quick check

What does total correctness add to partial correctness?

A. More tests
B. A termination proof
C. Longer code

Answer: B. The program must actually finish.

### Initialize

The invariant must hold before the first iteration. To sum initial positive integers, start with zero processed terms and a zero sum.

### Preserve and conclude

If the invariant holds before an iteration, show it still holds afterward. At exit, combine the invariant with the exit condition to obtain the result.

### Distinguish two kinds of correctness

Partial correctness means the result is correct if the program terminates. Proving termination as well gives total correctness.

### Definition and conditions

An invariant describes program state; merely restating the final goal is not enough.

$$
s=\sum_{i=1}^{k}i,\quad 0\le k\le n
$$

- The input is a nonnegative integer.
- Each iteration increments the index and adds the new term.

### Derivation

Initially no terms have been processed.

$$
k=0,\ s=0
$$

An iteration adds the next term.

$$
k'=k+1,\quad s'=s+(k+1)
$$

The remaining count strictly decreases; at exit all terms have been processed.

$$
n-k\downarrow0,\quad s=\sum_{i=1}^n i
$$

### Interactive diagram

Execute the summation step by step. Do the processed count, accumulated sum, and remaining count satisfy the invariant?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-invariants?view=visual

### Guided experiment

1. **Steps executed: 0** Set the control to $0$. Compare the current step with the complete reference result.

Preset observation: At this setting: accumulator $0$; finished: no.

2. **Steps executed: 6** Set the control to $6$. Compare the current step with the complete reference result.

Preset observation: At this setting: accumulator $21$; finished: yes.

3. **Steps executed: 12** Set the control to $12$. Compare the current step with the complete reference result.

Preset observation: At this setting: accumulator $21$; finished: yes.

### Worked examples

#### Example 1: The accumulator state

When summing through five, three terms have been processed. What should the accumulator contain?

- The invariant gives $s=1+2+3$.
- The current state is not the final result.

**Answer: Six.**

#### Example 2: An invariant is not enough

A program repeats “add zero to zero” forever, maintaining a zero accumulator. Does this prove termination?

- Preserving an invariant does not exclude an infinite loop.
- A bounded-below strictly decreasing quantity is still missing.

**Answer: No.**

### Common mistakes

- **An invariant means the loop variable never changes** The unchanged property is a relation among state variables.

- **A terminating test run proves universal termination** All allowed inputs still need a general argument.

### Exercises and solutions

**1. Find the sum of the first four positive integers.**

Hint: Add the terms successively.

Answer: Ten.

- $1+2+3+4=10$.

**2. Does a nonincreasing quantity guarantee termination?**

Hint: It could remain unchanged forever.

Answer: No.

- Strict decrease or another termination argument is needed.

**3. At which proof stage is the exit condition used?**

Hint: Connect the final state to the target.

Answer: The exit-conclusion step.

- After the loop, combine the exit condition with the invariant.

**4. Does partial correctness guarantee a result is always returned?**

Hint: What condition does its statement include?

Answer: No.

- It guarantees correctness only upon termination.

Prerequisites: Mathematical induction.

## 4.5 Algorithm growth and asymptotic notation

*Asymptotic notation describes eventual upper bounds, lower bounds, or matching orders of growth.*

### The idea

Asymptotic notation describes eventual upper bounds, lower bounds, or matching orders of growth.

### Intuition

It ignores fixed factors and sufficiently small inputs; it does not predict the seconds needed for one run.

### Another explanation

It constrains growth with input size.

### Quick check

What establishes matching order of growth?

A. Only an upper bound
B. Only a lower bound
C. Both upper and lower bounds

Answer: C. Two-sided control establishes matching growth.

### Define an upper bound

Big-O bounds a function by a fixed multiple of another beyond some threshold. The constant cannot vary with input size.

### Distinguish bounds from matching growth

A linear function also has a quadratic upper bound, but not quadratic order of growth. Tight growth requires both upper and lower bounds.

### Analyze bisection

Each step discards about half the candidates until one remains. Iterations grow logarithmically with input size; sorting and access costs need separate assumptions.

### Definition and conditions

The compared functions are eventually nonnegative, and the input tends to positive infinity.

$$
f\in O(g)\iff\exists C>0,N:\forall n\ge N,\ f(n)\le Cg(n)
$$

- The constant and threshold do not depend on subsequent input sizes.
- Binary search requires ordered data and available indexed access.

### Derivation

Each step halves the candidate count.

$$
\text{remaining size}\le\left\lceil n/2^k\right\rceil
$$

Reaching size one requires a power of two large enough to cover the input.

$$
2^k\ge n
$$

Take logarithms to obtain the iteration order.

$$
k\ge\lceil\log_2n\rceil
$$

### Interactive diagram

Increase the input size. How do linear scanning and repeated halving differ in step-count growth?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-growth?view=visual

### Guided experiment

1. **Input size: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: linear scan $1$; halvings to one $0$.

2. **Input size: 32** Set the control to $32$. Observe which objects, relations, or counts change.

Preset observation: At this setting: linear scan $32$; halvings to one $5$.

3. **Input size: 64** Set the control to $64$. Observe which objects, relations, or counts change.

Preset observation: At this setting: linear scan $64$; halvings to one $6$.

### Worked examples

#### Example 1: An upper bound

Prove $3n+2\in O(n)$.

- For $n\ge1$, $2\le2n$.
- Thus $3n+2\le5n$.

**Answer: Use constant five and threshold one.**

#### Example 2: Different orders

Do $n$ and $n^2$ have the same order of growth?

- $n/n^2=1/n$ tends to zero.
- No eventually positive fixed lower-bound multiple exists.

**Answer: No, though the first has a quadratic upper bound.**

### Common mistakes

- **Big-O gives exact elapsed time** It constrains growth with input size.

- **The comparison constant may change with the input** A single fixed constant must work eventually.

### Exercises and solutions

**1. How many halvings reduce one thousand twenty-four to one?**

Hint: Use powers of two.

Answer: Ten.

- $1024=2^{10}$.

**2. Must a Big-O bound be the tightest possible bound?**

Hint: A function can have many growth upper bounds.

Answer: No.

- A linear function also has a quadratic bound.

**3. Can asymptotic notation ignore any fixed multiplier, however large?**

Hint: The definition permits a fixed constant.

Answer: It can be absorbed asymptotically but matters in actual cost.

- Yes, though that factor still affects practical runtimes.

**4. Must a nested pair of loops have quadratic complexity?**

Hint: Check the actual range of each loop.

Answer: Not necessarily.

- The inner loop might run only a constant number of times; counting nesting levels is insufficient.

Prerequisites: Functions, injections, and surjections.

## Chapter review

Try independently before reading the solutions.

**1. In the inductive proof for the sum of initial odd integers, what next term is added?**

Hint: Check which index has already been established.

Answer: $2k+1$, not $2k-1$.

- The first $k$ terms sum to $k^2$; the next term is $2k+1$.
- Adding gives $(k+1)^2$.

**2. A loop preserves a correct invariant but runs forever. Which part of its correctness proof is missing?**

Hint: Distinguish returning a correct result from necessarily returning.

Answer: Termination is missing.

- The invariant supports only partial correctness.
- Termination still needs evidence such as a bounded-below strictly decreasing quantity.

# Chapter 5 · Basic counting

Separate choices, then combine them.

Goals:
- Split into disjoint cases
- Count decreasing choices
- Check distinguishability

## 5.1 The sum and product rules

*Add mutually exclusive cases; multiply successive choices. Check for double counting first.*

### The idea

Add mutually exclusive cases; multiply successive choices. Check for double counting first.

### Intuition

Choosing a main dish and a drink uses multiplication. Choosing fish or meat uses addition, provided the categories do not overlap.

### Another explanation

Successive choices generally combine into ordered objects.

### Quick check

Which operation combines disjoint cases?

A. Addition
B. Multiplication
C. Maximum

Answer: A. Objects in different classes do not overlap.

### Split into disjoint cases

Partition the objects into disjoint classes, count each class, then add. Overlap requires deduplication or inclusion–exclusion.

### Separate the choice stages

Multiply when each stage has a fixed number of options. Choices may depend on earlier ones, but every prefix must have the stated number of continuations; otherwise sum over branches.

### Check with a tree

Each root-to-leaf path represents a complete object. Count leaves only after establishing a bijection between paths and objects.

### Definition and conditions

The size of a finite Cartesian product is the product of the set sizes.

$$
|A\times B|=|A||B|,\quad A\cap B=\varnothing\implies|A\cup B|=|A|+|B|
$$

- Cases added by the sum rule are disjoint.
- At every stage of the product rule, count options under the preceding choices.

### Derivation

Fix the first choice.

$$
a\in A
$$

Each first choice has the same number of second choices.

$$
|\{(a,b):b\in B\}|=|B|
$$

Partition into disjoint groups by the first choice.

$$
|A\times B|=\sum_{a\in A}|B|=|A||B|
$$

### Interactive diagram

Change the two choice counts. How does the number of complete grid objects change?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-counting-rules?view=visual

### Guided experiment

1. **First-stage options: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: complete objects $4$.

2. **First-stage options: 3** Set the control to $3$. Observe which objects, relations, or counts change.

Preset observation: At this setting: complete objects $12$.

3. **First-stage options: 6** Set the control to $6$. Observe which objects, relations, or counts change.

Preset observation: At this setting: complete objects $24$.

### Worked examples

#### Example 1: Meal combinations

Choose one of four mains and one of three drinks. How many meals are possible?

- There are four first choices.
- Each pairs with three drinks.

**Answer: Twelve.**

#### Example 2: A password without repetition

Form an ordered two-character string from five characters without repetition.

- There are five choices for the first character.
- Only four remain for the second.

**Answer: Twenty.**

### Common mistakes

- **Two successive choices always add their counts** Successive choices generally combine into ordered objects.

- **Overlapping classes can be added directly** Their intersection would be counted twice.

### Exercises and solutions

**1. Three switches each have two states. How many joint states are possible?**

Hint: Multiply across stages.

Answer: Eight.

- $2^3=8$.

**2. Two groups each contain three people, with one person in both. How many distinct people are there?**

Hint: How many times was the shared person counted?

Answer: There are five distinct people, not six.

- One duplicate must be subtracted.

**3. Two stages have respectively two and four options. How many complete objects are possible?**

Hint: Check that every first choice has four continuations.

Answer: Eight.

- $2\cdot4=8$.

**4. If one object corresponds to two paths, can leaves still be counted directly?**

Hint: Paths and objects need a bijection.

Answer: No.

- The leaf count would count an object twice.

Prerequisites: Set operations and power sets.

## 5.2 The pigeonhole principle and double counting

*With more objects than containers, some container holds more than one object.*

### The idea

With more objects than containers, some container holds more than one object.

### Intuition

The pigeonhole principle guarantees a collision without necessarily locating it.

### Another explanation

No uniform distribution is required.

### Quick check

Do ten objects in three locations guarantee four in some location?

A. Yes
B. Only three are guaranteed
C. Only with an even distribution

Answer: A. At most three per location would accommodate only nine.

### Use an average-based lower bound

If each of a fixed number of boxes holds at most a given count, total capacity is bounded. Exceed that capacity and some box must hold more.

### Choose suitable boxes

Boxes may be residue classes, birth months, or intervals. The key is often finding a finite classification covering every object.

### Count the same relation twice

Group the same collection in two ways to obtain two expressions for its size. For example, the two endpoints of each edge contribute to the degree sum.

### Definition and conditions

The box count is a positive integer and the object count a nonnegative integer.

$$
\max_i n_i\ge\left\lceil\frac Nk\right\rceil,\quad\sum_i n_i=N
$$

- Each object goes into exactly one box.

### Derivation

Assume every box falls below the target count.

$$
n_i\le\lceil N/k\rceil-1
$$

This bounds the total number of objects.

$$
\sum_i n_i\le k(\lceil N/k\rceil-1)<N
$$

Contradict the actual total.

$$
\sum_i n_i=N
$$

### Interactive diagram

Change the numbers of objects or boxes. How does the guaranteed occupancy bound change?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-pigeonhole?view=visual

### Guided experiment

1. **Object count: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: guaranteed lower bound $0$; largest occupancy in this allocation $0$.

2. **Object count: 10** Set the control to $10$. Observe which objects, relations, or counts change.

Preset observation: At this setting: guaranteed lower bound $4$; largest occupancy in this allocation $4$.

3. **Object count: 20** Set the control to $20$. Observe which objects, relations, or counts change.

Preset observation: At this setting: guaranteed lower bound $7$; largest occupancy in this allocation $7$.

### Worked examples

#### Example 1: Birth months

Among thirteen people, how many must share a birth month?

- There are only twelve months.
- The ceiling of thirteen divided by twelve is two.

**Answer: At least two.**

#### Example 2: A subset with a marked element

Choose a subset of an $n$-element set and mark one of its elements. Count the possibilities.

- Choose size $k$ first, then mark an element: $\sum_k k\binom nk$.
- Choose the marked element first, then the remaining subset: $n2^{n-1}$.

**Answer: $\sum_k k\binom nk=n2^{n-1}$ for positive integer $n$.**

### Common mistakes

- **The average bound requires an even distribution** No uniform distribution is required.

- **Similar-looking counting expressions are equal** Explain why they count the same objects.

### Exercises and solutions

**1. Ten objects go into three boxes. How many must some box contain?**

Hint: Round the average upward.

Answer: Four.

- $\lceil10/3\rceil=4$.

**2. Does the pigeonhole principle identify the particular box?**

Hint: Existence is different from location.

Answer: Not in general.

- It guarantees only that at least one box reaches the bound.

**3. Must any six integers contain two congruent modulo five?**

Hint: Classify by the five remainders.

Answer: Yes.

- Six objects go into five classes.

**4. May the two sides of a double-counting identity count different collections?**

Hint: Specify the relation being counted first.

Answer: No.

- Both sides must describe the same set or collections in bijection.

Prerequisites: The sum and product rules.

## 5.3 Permutations and combinations

*Use permutations when order matters; combinations when only membership matters.*

### The idea

Use permutations when order matters; combinations when only membership matters.

### Intuition

Combinations identify every ordering of the same selected group as a single choice.

### Another explanation

Distinct roles require permutations instead.

### Quick check

Must the order of two interchangeable representatives be distinguished?

A. Yes
B. No
C. It depends on alphabetical order

Answer: B. Each pair is a subset counted once.

### Count decreasing choices

Selecting ordered objects without replacement reduces the available count by one each time. A full permutation orders every object.

### Remove repeated representations

Each fixed subset has exactly its size factorial orderings. Divide the permutation count by this uniform multiplicity to count combinations.

### Handle boundary cases

Choosing zero objects gives one empty choice. This book sets the binomial coefficient to zero when more objects are requested than available; use the factorial formula only in its valid range.

### Definition and conditions

Objects are distinguishable and selection is without replacement.

$$
P(n,k)=\frac{n!}{(n-k)!},\quad\binom nk=\frac{n!}{k!(n-k)!}
$$

- The integers satisfy zero at most the selected count at most the total count.
- Combinations disregard internal order.

### Derivation

Successive choices give an ordered list.

$$
P(n,k)=n(n-1)\cdots(n-k+1)
$$

Every subset corresponds to the same number of permutations.

$$
\text{multiplicity per subset}=k!
$$

Divide out duplicate representations.

$$
\binom nk=P(n,k)/k!
$$

### Interactive diagram

Change the group and selection sizes. How do the listed subsets correspond to the permutation count?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-permutations?view=visual

### Guided experiment

1. **Total objects: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: actual selected count $1$; combinations $1$; permutations $1$.

2. **Total objects: 4** Set the control to $4$. Observe which objects, relations, or counts change.

Preset observation: At this setting: actual selected count $2$; combinations $6$; permutations $12$.

3. **Total objects: 8** Set the control to $8$. Observe which objects, relations, or counts change.

Preset observation: At this setting: actual selected count $2$; combinations $28$; permutations $56$.

### Worked examples

#### Example 1: Representatives versus offices

From five people, count pairs of representatives and choices of president and vice president.

- Representatives are unordered: $\binom52=10$.
- Distinct offices are ordered: $5\cdot4=20$.

**Answer: Ten and twenty.**

#### Example 2: The empty choice

How many ways are there to choose zero people from five?

- Selecting nobody gives the empty set.
- There is only one such result.

**Answer: One.**

### Common mistakes

- **Combinations distinguish order too** Distinct roles require permutations instead.

- **Dividing by any factorial removes repetition** First prove every object has the same multiplicity.

### Exercises and solutions

**1. How many ways can three representatives be chosen from six people?**

Hint: Use the combination formula.

Answer: Twenty.

- $6\cdot5\cdot4/(3\cdot2)=20$.

**2. How many ways can four distinct books be arranged in a row?**

Hint: Count full permutations.

Answer: Twenty-four.

- $4!=24$.

**3. Can the decreasing-product rule be used when characters may repeat?**

Hint: Do later choice counts decrease?

Answer: Not directly.

- With replacement, every stage retains the original number of options.

**4. What is $\binom n1$?**

Hint: Choose just one element.

Answer: $n$.

- Each element corresponds to one singleton subset.

Prerequisites: The sum and product rules.

## 5.4 The binomial theorem and Pascal's identity

*Expansion coefficients count which factors contribute the same term.*

### The idea

Expansion coefficients count which factors contribute the same term.

### Intuition

Choose the left or right term in each factor. The selected position set determines how many identical terms occur.

### Another explanation

Here exponent zero corresponds to row zero.

### Quick check

Why can the two classes in Pascal's recurrence be added?

A. Their values are close
B. They are disjoint and cover every case
C. They have equal size

Answer: B. Classify by whether a specified element is selected.

### Explain binomial coefficients

To select a given number of right-hand terms from identical binomial factors, choose their positions. Every such choice produces the same monomial.

### Partition subsets

Classify subsets by whether they contain one specified element. The two classes reduce to choices from a smaller set, yielding Pascal's recurrence.

### Use special substitutions

Setting both variables to one counts all subsets. Setting them to one and negative one gives the difference between even-sized and odd-sized subset counts.

### Definition and conditions

The binomial theorem here has a nonnegative integer exponent.

$$
(x+y)^n=\sum_{k=0}^n\binom nk x^{n-k}y^k
$$

- Only nonnegative integer exponents are considered.

### Derivation

The specified element is absent.

$$
\binom{n-1}{k}
$$

The specified element is present.

$$
\binom{n-1}{k-1}
$$

The classes are disjoint and exhaustive.

$$
\binom nk=\binom{n-1}k+\binom{n-1}{k-1}
$$

### Interactive diagram

Select an entry. Which two entries from the preceding row contribute to it?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-binomial?view=visual

### Guided experiment

1. **Row: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: actual column $1$; coefficient $1$; upper-left contribution $1$; upper-right contribution $0$.

2. **Row: 5** Set the control to $5$. Observe which objects, relations, or counts change.

Preset observation: At this setting: actual column $2$; coefficient $10$; upper-left contribution $4$; upper-right contribution $6$.

3. **Row: 10** Set the control to $10$. Observe which objects, relations, or counts change.

Preset observation: At this setting: actual column $2$; coefficient $45$; upper-left contribution $9$; upper-right contribution $36$.

### Worked examples

#### Example 1: Extract a coefficient

Find the coefficient of $x^2$ in $(1+x)^5$.

- Choose two of the five factors to contribute a variable.
- $\binom52=10$.

**Answer: Ten.**

#### Example 2: Sum a row

With rows numbered from zero, what is the sum of row four of Pascal's triangle?

- Set both terms of the binomial to one.
- $2^4=16$.

**Answer: Sixteen.**

### Common mistakes

- **Pascal's triangle starts at row one** Here exponent zero corresponds to row zero.

- **Equal parity counts also hold for an empty base set** The toggling bijection needs at least one element.

### Exercises and solutions

**1. Compute $\binom63$ from the preceding row.**

Hint: Add the two neighboring contributions.

Answer: Twenty.

- $\binom53+\binom52=10+10=20$.

**2. What is the coefficient of $ab^2$ in $(a+b)^3$?**

Hint: Choose two positions for the right-hand term.

Answer: Three.

- $\binom32=3$.

**3. Does every nonempty finite set have equally many even-sized and odd-sized subsets?**

Hint: Toggle one fixed element.

Answer: Yes.

- This gives a bijection between even-sized and odd-sized subsets.

**4. Does the empty set have equally many even-sized and odd-sized subsets?**

Hint: Check the starting case separately.

Answer: No.

- Only its empty subset is even-sized; there are no odd-sized subsets.

Prerequisites: Permutations and combinations.

## 5.5 Repeated selections and stars and bars

*Distribute identical objects among distinct recipients by encoding counts with stars and bars.*

### The idea

Distribute identical objects among distinct recipients by encoding counts with stars and bars.

### Intuition

Stars represent objects and bars separate recipients. Adjacent bars mean a recipient receives zero.

### Another explanation

Distinct objects retain extra identity information.

### Quick check

What do adjacent bars mean?

A. An invalid encoding
B. Someone receives zero objects
C. The objects are identical

Answer: B. There are no stars between those bars.

### Check distinguishability

Stars and bars assumes identical objects and distinct recipients. Named objects or indistinguishable recipients give a different counting problem.

### Count nonnegative solutions

Arrange one star per object and one fewer bar than recipients. Adjacent bars and bars at either end encode zero allocations.

### Add lower and upper bounds

For at least one per recipient, distribute one to each first. Upper bounds cannot be handled by shifting alone: exclude excessive allocations, usually with inclusion–exclusion.

### Definition and conditions

Nonnegative integer solutions correspond bijectively to star-and-bar strings.

$$
x_1+\cdots+x_k=n,\ x_i\ge0\implies\#=\binom{n+k-1}{k-1}
$$

- The object count is a nonnegative integer and the recipient count a positive integer.
- Objects are identical; recipients are distinct.

### Derivation

Encode each allocation as a run of stars.

$$
(2,0,1)\longleftrightarrow **||*
$$

The string has fixed counts of two symbols.

$$
n\text{ stars},\ k-1\text{ bars}
$$

Choose the bar positions.

$$
\#=\binom{n+k-1}{k-1}
$$

### Interactive diagram

Change the object and recipient counts. How do valid strings correspond to allocation solutions?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-stars-bars?view=visual

### Guided experiment

1. **Identical-object count: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: allocations $1$.

2. **Identical-object count: 4** Set the control to $4$. Observe which objects, relations, or counts change.

Preset observation: At this setting: allocations $15$.

3. **Identical-object count: 8** Set the control to $8$. Observe which objects, relations, or counts change.

Preset observation: At this setting: allocations $45$.

### Worked examples

#### Example 1: Allow empty allocations

Distribute five identical candies among three people, allowing zero. How many ways are there?

- There are five stars and two bars.
- $\binom72=21$.

**Answer: Twenty-one.**

#### Example 2: At least one each

Distribute the same five candies among three people, with at least one each.

- Give each person one, leaving two.
- $\binom42=6$.

**Answer: Six.**

### Common mistakes

- **Distinguishability does not affect the answer** Distinct objects retain extra identity information.

- **Bars cannot appear at the ends** End bars encode zero for the first or last recipient.

### Exercises and solutions

**1. How many ways can three identical candies go to two people, allowing zero?**

Hint: The first person's share ranges from zero through three.

Answer: Four.

- There are four allocations.

**2. How many ways can zero candies go to four people, allowing zero?**

Hint: Every share is forced.

Answer: One.

- All shares must be zero.

**3. Can the same formula distribute five individually named candies among three people?**

Hint: Are the objects identical?

Answer: No.

- Each candy has three destinations, giving three to the fifth power.

**4. For at most two each, can we just subtract two and apply the formula?**

Hint: Upper bounds differ from lower bounds.

Answer: No.

- Subtracting a fixed allocation handles lower bounds; upper bounds require excluding excess allocations.

Prerequisites: Permutations and combinations.

## Chapter review

Try independently before reading the solutions.

**1. Choose three representatives from eight people, then designate one spokesperson. How many ways are there?**

Hint: Choose the unordered group, then assign the role.

Answer: One hundred sixty-eight.

- $\binom83=56$.
- $56\cdot3=168$.

**2. Distribute six identical candies among three people, with at least one each. How many ways?**

Hint: Give each person one first.

Answer: Ten.

- Distribute the remaining three among three people, allowing zero.
- $\binom52=10$.

# Chapter 6 · Recurrences and combinatorial methods

Solve larger problems through smaller ones.

Goals:
- Remove overlap between two sets
- Form the characteristic equation
- Choose elementary outcomes

## 6.1 Inclusion–exclusion

*After adding overlapping collections, correct each object's repeated count by alternating subtraction and addition.*

### The idea

After adding overlapping collections, correct each object's repeated count by alternating subtraction and addition.

### Intuition

Intersections are initially overcounted; subtracting pairwise intersections then removes triple intersections too often.

### Another explanation

The triple intersection may be empty while pairwise intersections are not.

### Quick check

What sign does the triple intersection have in the three-set formula?

A. Plus
B. Minus
C. It is absent

Answer: A. It corrects excessive subtraction by the pairwise intersections.

### Remove overlap between two sets

The size of a two-set union is the sum of the sizes minus the intersection: shared elements were counted twice.

### Extend to three sets

A member of all three sets is first added three times, then subtracted in three pairwise intersections. Add it back once.

### Prove with indicators

Check the total weight of each element. The binomial identity gives weight one to elements in at least one set and zero to elements in none.

### Definition and conditions

Inclusion–exclusion applies to finite sets; intersection sizes need not be equal.

$$
|A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|A\cap C|-|B\cap C|+|A\cap B\cap C|
$$

- All finite sets and intersections belong to the same universe.

### Derivation

Fix an element belonging to both sets.

$$
1+1-1=1
$$

Fix an element belonging to all three sets.

$$
3-3+1=1
$$

Sum the individual weights to count the union.

$$
\mathbf1_{A\cup B}=\mathbf1_A+\mathbf1_B-\mathbf1_{A\cap B}
$$

### Interactive diagram

Expand the integer range. How do intersections of multiple sets remove duplicate counts?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-inclusion-exclusion?view=visual

### Guided experiment

1. **Integer-range upper bound: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: multiples of two $0$; multiples of three $0$; intersection $0$; union $0$.

2. **Integer-range upper bound: 30** Set the control to $30$. Observe which objects, relations, or counts change.

Preset observation: At this setting: multiples of two $15$; multiples of three $10$; intersection $5$; union $20$.

3. **Integer-range upper bound: 60** Set the control to $60$. Observe which objects, relations, or counts change.

Preset observation: At this setting: multiples of two $30$; multiples of three $20$; intersection $10$; union $40$.

### Worked examples

#### Example 1: Two courses

Ten people take course A, eight take B, and three take both. How many take at least one?

- The direct sum eighteen counts three people twice.
- Subtract three.

**Answer: Fifteen.**

#### Example 2: Sieve integers

How many integers from one through thirty are divisible by two or three?

- There are fifteen multiples of two and ten of three.
- The five multiples of six must be subtracted once.

**Answer: Twenty.**

### Common mistakes

- **Pairwise disjointness is the same as an empty triple intersection** The triple intersection may be empty while pairwise intersections are not.

- **Subtracting an arbitrary intersection once suffices** Check the final weight of every type of member.

### Exercises and solutions

**1. Two sets have sizes seven and six, with intersection size two. Find the union size.**

Hint: Remove one duplicate count.

Answer: Eleven.

- $7+6-2=11$.

**2. Why add the triple intersection at the end of the three-set formula?**

Hint: Check the coefficient of a member in all three sets.

Answer: Restore its count to one.

- Its coefficient so far is three minus three, or zero.

**3. What does inclusion–exclusion become for two disjoint sets?**

Hint: Their intersection is empty.

Answer: The sum rule.

- Only the sum of the two sizes remains.

**4. How many integers from one through twenty are divisible by two or five?**

Hint: The intersection consists of multiples of ten.

Answer: Twelve.

- $10+4-2=12$.

Prerequisites: Set operations and power sets, The sum and product rules.

## 6.2 Recurrences and first-order equations

*A recurrence defines the next term; an initial value selects the particular sequence.*

### The idea

A recurrence defines the next term; an initial value selects the particular sequence.

### Intuition

The same update rule can generate many sequences. Different starting values give different trajectories.

### Another explanation

The initial value selects a particular sequence.

### Quick check

What else determines a unique sequence from a first-order recurrence?

A. An appropriate initial value
B. Enough plotted points
C. A duplicate recurrence

Answer: A. The initial value and each uniquely specified update determine all terms.

### Specify the indices

State whether indexing starts at zero or one and where the recurrence applies, avoiding a shift of the entire formula.

### Expand successive steps

A first-order linear recurrence multiplies by a fixed coefficient and adds a constant. Expansion produces a geometric sum; alternatively subtract an equilibrium first.

### Check the solution

A closed formula must satisfy both the initial value and the recurrence. Neither alone suffices. Induction proves that satisfying both determines a unique sequence.

### Definition and conditions

A first-order recurrence with fixed real coefficients can be expanded as a geometric sum.

$$
a_{n+1}=ra_n+c,\quad a_n=r^na_0+c\sum_{j=0}^{n-1}r^j
$$

- Indices start at zero.
- An empty geometric sum is zero.

### Derivation

Expand the first two updates.

$$
a_1=ra_0+c,\quad a_2=r^2a_0+rc+c
$$

Multiply the existing term by the coefficient, then add the constant.

$$
a_n=r^na_0+c(1+r+\cdots+r^{n-1})
$$

Handle coefficient one by a separate sum.

$$
r=1\implies a_n=a_0+nc
$$

### Interactive diagram

Change the multiplier, added constant, and step count. How does the sequence unfold?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-first-recurrence?view=visual

### Guided experiment

1. **Steps executed: 0** Set the control to $0$. Compare the current step with the complete reference result.

Preset observation: At this setting: final term $0$.

2. **Steps executed: 5** Set the control to $5$. Compare the current step with the complete reference result.

Preset observation: At this setting: final term $31$.

3. **Steps executed: 10** Set the control to $10$. Compare the current step with the complete reference result.

Preset observation: At this setting: final term $1023$.

### Worked examples

#### Example 1: Double and add one

$a_0=0,a_{n+1}=2a_n+1$.

- Expansion gives $a_n=1+2+\cdots+2^{n-1}$.
- The geometric sum is $2^n-1$.

**Answer: $a_n=2^n-1$.**

#### Example 2: An arithmetic special case

For $a_0=3,a_{n+1}=a_n+4$, find the term with index five.

- The coefficient is one; each update adds four.
- $a_5=3+5\cdot4$.

**Answer: Twenty-three.**

### Common mistakes

- **Initial values do not affect recurrence solutions** The initial value selects a particular sequence.

- **The geometric-sum formula may divide by zero** Use a separate form when the coefficient is one.

### Exercises and solutions

**1. Given $a_0=1,a_{n+1}=2a_n$, find $a_4$.**

Hint: Expand four times.

Answer: Sixteen.

- $a_4=2^4=16$.

**2. Does a recurrence alone, without an initial value, determine a unique sequence?**

Hint: Compare different starting values.

Answer: No.

- Different starting values generally give different solutions.

**3. Find the general term for $a_0=0,a_{n+1}=a_n+3$.**

Hint: Each step adds three.

Answer: $3n$.

- $a_n=3n$.

**4. Is matching the first five terms enough to verify a formula?**

Hint: Substitute it back at an arbitrary index.

Answer: No.

- Finite agreement does not rule out later differences.

Prerequisites: Mathematical induction.

## 6.3 Second-order linear recurrences

*When the next term depends on two preceding terms, two initial values are needed.*

### The idea

When the next term depends on two preceding terms, two initial values are needed.

### Intuition

Characteristic roots split a recurrence into simple powers. A repeated root needs an additional index factor.

### Another explanation

The general formula must still satisfy them.

### Quick check

Why cannot the same power be written twice as two independent solutions for a repeated root?

A. The coefficients become too large
B. The two terms combine into one solution
C. The initial values must be equal

Answer: B. A second independent dependence on the index is required.

### Form the characteristic equation

Substitute a power-form candidate into a homogeneous constant-coefficient recurrence to obtain an algebraic equation for its growth factor.

### Handle distinct and repeated roots

Distinct roots yield two independent power solutions. For a repeated root, the second solution is the index times that power. This repeated-root formula assumes a nonzero root.

### Fit the initial values

The two initial values determine the two coefficients. A nonhomogeneous recurrence also needs a particular solution; the homogeneous general solution alone does not suffice.

### Definition and conditions

This lesson considers real second-order homogeneous recurrences with constant coefficients.

$$
a_n=sa_{n-1}+ta_{n-2},\quad r^2-sr-t=0
$$

- The recurrence starts at index two.
- Apply power and repeated-root formulas under their stated conditions; check a repeated zero root directly in the recurrence.

### Derivation

Substitute a power-form candidate.

$$
r^n=sr^{n-1}+tr^{n-2}
$$

For a nonzero root, cancel the common power.

$$
r^2=sr+t
$$

Combine distinct-root solutions and fit the initial values.

$$
a_n=Ar_1^n+Br_2^n\quad(r_1\ne r_2)
$$

### Interactive diagram

Advance term by term. How do the two preceding terms combine to make the next?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-second-recurrence?view=visual

### Guided experiment

1. **Final index: 0** Set the control to $0$. Compare the current step with the complete reference result.

Preset observation: At this setting: final term $0$.

2. **Final index: 8** Set the control to $8$. Compare the current step with the complete reference result.

Preset observation: At this setting: final term $21$.

3. **Final index: 16** Set the control to $16$. Compare the current step with the complete reference result.

Preset observation: At this setting: final term $987$.

### Worked examples

#### Example 1: Fibonacci

Find the first six terms of $F_0=0,F_1=1,F_n=F_{n-1}+F_{n-2}$.

- Start with zero and one.
- Successive addition gives one, two, three, five.

**Answer: Zero, one, one, two, three, five.**

#### Example 2: A repeated root

$a_n=2a_{n-1}-a_{n-2},a_0=1,a_1=3$.

- The characteristic polynomial is $(r-1)^2$.
- $a_n=A+Bn$; the initial values give $A=1,B=2$.

**Answer: $a_n=1+2n$.**

### Common mistakes

- **The two initial values may be ignored afterward** The general formula must still satisfy them.

- **Every recurrence has a quadratic characteristic equation** The equation depends on the order, homogeneity, and constant-coefficient assumptions.

### Exercises and solutions

**1. For $F_0=0,F_1=1,F_n=F_{n-1}+F_{n-2}$ with $n\ge2$, find $F_6$.**

Hint: Add three and five.

Answer: Eight.

- The term at index six is eight.

**2. Does one initial value usually suffice for a second-order recurrence?**

Hint: The second term can still vary freely.

Answer: No.

- A second initial constraint is missing.

**3. For repeated root one, do constant solutions alone suffice?**

Hint: Multiplying the root power by the index gives a second solution.

Answer: No.

- A linear index term is also needed.

**4. Find the roots for $a_n=3a_{n-1}-2a_{n-2}$.**

Hint: Factor the quadratic.

Answer: One and two.

- $r^2-3r+2=(r-1)(r-2)$.

Prerequisites: Recurrences and first-order equations.

## 6.4 Generating functions and constrained counting

*Store counts as power-series coefficients; multiplication then combines independent choices.*

### The idea

Store counts as power-series coefficients; multiplication then combines independent choices.

### Intuition

An exponent records the total size; its coefficient counts ways to reach that size.

### Another explanation

They play different roles.

### Quick check

What do generating-function coefficients usually represent?

A. Numbers of ways
B. Input values
C. Radii of convergence

Answer: A. Exponents record totals; coefficients count ways.

### Use formal power series

Here a series is a sequence of coefficients, without a claim about convergence at real inputs. Each fixed-degree coefficient requires only finite calculation.

### Interpret multiplication

Select one term from each factor and add their exponents. Add contributions with the same total exponent: this is convolution.

### Include upper bounds

Use a finite polynomial when a type can occur from zero up to a limit. Products encode separate quantity constraints for distinct recipients.

### Definition and conditions

Coefficient-extraction notation specifies the coefficient of a given power.

$$
[x^n]\prod_{i=1}^k(1+x+\cdots+x^{u_i})=\#\{(a_i):\sum_i a_i=n,\ 0\le a_i\le u_i\}
$$

- Allocations are integers and recipients are distinct.
- Calculations use formal power series and make no analytic convergence claims.

### Derivation

Each possible allocation to one recipient contributes one term.

$$
1+x+\cdots+x^{u_i}
$$

Multiplication over recipients adds exponents.

$$
x^{a_1}\cdots x^{a_k}=x^{a_1+\cdots+a_k}
$$

Combining like powers counts every valid allocation with the same total.

$$
[x^n]\prod_i\sum_{a_i=0}^{u_i}x^{a_i}
$$

### Interactive diagram

Change the recipient count, individual bound, and target total. How do the convolution coefficients change?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-generating-functions?view=visual

### Guided experiment

1. **Target total: 0** Set the control to $0$. Compare the current step with the complete reference result.

Preset observation: At this setting: target coefficient $1$; sum of all coefficients $27$.

2. **Target total: 10** Set the control to $10$. Compare the current step with the complete reference result.

Preset observation: At this setting: target coefficient $0$; sum of all coefficients $27$.

3. **Target total: 20** Set the control to $20$. Compare the current step with the complete reference result.

Preset observation: At this setting: target coefficient $0$; sum of all coefficients $27$.

### Worked examples

#### Example 1: Bounded allocations

Two people may each receive at most two candies. How many allocations total two candies?

- Find the quadratic coefficient of $(1+x+x^2)^2$.
- It comes from $(0,2),(1,1),(2,0)$.

**Answer: Three.**

#### Example 2: Different denominations

Make four units using one-unit and two-unit coins, distinguishing denomination counts.

- Find the fourth-degree coefficient of $(1-x)^{-1}(1-x^2)^{-1}$.
- Use zero, one, or two two-unit coins; each choice determines the one-unit count.

**Answer: Three.**

### Common mistakes

- **Exponents and coefficients have interchangeable meanings** They play different roles.

- **Formal calculations automatically establish analytic convergence** Formal identities assert coefficient relations only.

### Exercises and solutions

**1. What is the coefficient of the linear term in $(1+x)^3$?**

Hint: Select the variable from one factor.

Answer: Three.

- There are three factors to choose.

**2. What does the exponent record in counting?**

Hint: Exponents add under multiplication.

Answer: Total size.

- It records the accumulated quantity, not the number of ways.

**3. Three people each receive zero or one item. How many allocations total two?**

Hint: Extract the quadratic coefficient.

Answer: Three.

- $[x^2](1+x)^3=3$.

**4. Does equality of formal power series require real-variable convergence?**

Hint: Equality is defined coefficientwise.

Answer: No.

- Matching every coefficient suffices.

Prerequisites: Permutations and combinations, Recurrences and first-order equations.

## 6.5 Counting and discrete probability

*Before converting counts to probabilities, check that elementary outcomes are equally likely.*

### The idea

Before converting counts to probabilities, check that elementary outcomes are equally likely.

### Intuition

Counting possible head counts does not make those counts equally probable.

### Another explanation

Check how outcomes are grouped.

### Quick check

Do equally likely ordered strings remain equally likely after grouping by counts?

A. Always
B. Not necessarily
C. Only zero probabilities can differ

Answer: B. Different recorded values may collect different numbers of elementary strings.

### Choose elementary outcomes

Ordered strings from independent fair coin tosses are equally likely. Reducing a string to its head count groups different numbers of strings into different recorded values.

### Find expectations with indicators

The success count is a sum of success indicators. Linearity of expectation does not require independence; the binomial probability formula does require the corresponding independence assumptions.

### Condition, then count

Renormalize within the known event. For a positive-probability event in a finite equally likely model, conditional probability is intersection size divided by conditioning-event size.

### Definition and conditions

Independent trials with the same success probability give a binomial count.

$$
P(X=k)=\binom nk p^k(1-p)^{n-k},\qquad E(X)=np
$$

- The probability formula requires independence, a fixed trial count, and a common success probability.
- A simple ratio of counts requires equally likely elementary outcomes.

### Derivation

Fix the successful positions.

$$
P(\text{specified successful positions})=p^k(1-p)^{n-k}
$$

Choose the set of successful positions.

$$
\#=\binom nk
$$

Add the mutually exclusive events.

$$
P(X=k)=\binom nkp^k(1-p)^{n-k}
$$

### Interactive diagram

Change the trial and success counts. How does counting strings give the binomial probability?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-discrete-probability?view=visual

### Guided experiment

1. **Independent coin tosses: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: actual heads $1$; matching ordered strings $1$; total ordered strings $2$.

2. **Independent coin tosses: 4** Set the control to $4$. Observe which objects, relations, or counts change.

Preset observation: At this setting: actual heads $2$; matching ordered strings $6$; total ordered strings $16$.

3. **Independent coin tosses: 8** Set the control to $8$. Observe which objects, relations, or counts change.

Preset observation: At this setting: actual heads $2$; matching ordered strings $28$; total ordered strings $256$.

### Worked examples

#### Example 1: Exactly two heads

What is the probability of exactly two heads in three independent fair tosses?

- The eight ordered strings are equally likely.
- There are three choices of the two head positions.

**Answer: $\frac38$.**

#### Example 2: Given at least one head

In the same three tosses, given at least one head, what is the probability of exactly two?

- Conditioning excludes all tails, leaving seven strings.
- Three still have exactly two heads.

**Answer: $\frac37$.**

### Common mistakes

- **Every recorded value has the same probability** Check how outcomes are grouped.

- **Linearity of expectation requires independence** Linearity itself does not require independence.

### Exercises and solutions

**1. What is the probability of all heads in four independent fair tosses?**

Hint: Only one string qualifies.

Answer: $\frac1{16}$.

- $1/2^4=1/16$.

**2. If there are three possible head counts, does each have probability one third?**

Hint: Count the ordered outcomes grouped into each recorded value.

Answer: That conclusion does not follow.

- Different counts can combine different numbers of strings.

**3. What is the expected success count in six trials with success probability one half?**

Hint: Add success indicators.

Answer: Three.

- $6/2=3$.

**4. Does finding the expected success count always require independence?**

Hint: Linearity of expectation does not require independence.

Answer: No.

- Known marginal success probabilities can be added directly.

Prerequisites: Permutations and combinations.

## Chapter review

Try independently before reading the solutions.

**1. How many integers from one through sixty are divisible by three or five?**

Hint: Subtract multiples of fifteen.

Answer: Twenty-eight.

- $20+12-4=28$.
- The intersection consists of multiples of fifteen.

**2. For $a_0=1,a_{n+1}=2a_n+1$, find and verify the general term.**

Hint: Adding one turns the update into doubling.

Answer: $a_n=2^{n+1}-1$.

- $a_{n+1}+1=2(a_n+1)$.
- $a_n+1=2^{n+1}$ satisfies both the initial value and recurrence.

# Chapter 7 · Graphs and connections

Represent relationships with vertices and edges.

Goals:
- Specify the graph type
- Find connected components
- Use Euler's formula

## 7.1 Graphs, adjacency lists, and adjacency matrices

*A graph represents objects by vertices and pairwise relationships by edges.*

### The idea

A graph represents objects by vertices and pairwise relationships by edges.

### Intuition

Repositioning or redrawing a graph does not change its structure. What matters is which vertices are adjacent.

### Another explanation

Only designated vertices count; crossing lines alone create no new vertex.

### Quick check

What are the diagonal entries of a simple undirected graph's adjacency matrix?

A. One
B. Zero
C. Arbitrary

Answer: B. There are no loops.

### Specify the graph type

A simple undirected graph has no loops or parallel edges; directed edges have orientations. Unless stated otherwise, this book uses finite simple undirected graphs.

### Choose a representation

An adjacency matrix supports checking a vertex pair; an adjacency list supports enumerating actual neighbors. Lists usually save space for sparse graphs.

### Distinguish equality and isomorphism

An isomorphism may rename vertices but must preserve adjacency. Similar drawings or matching degree sequences alone do not prove isomorphism.

### Definition and conditions

An edge in a simple undirected graph is an unordered pair of distinct vertices.

$$
G=(V,E),\quad E\subseteq\binom V2,\quad A_{ij}=\mathbf1_{\{i,j\}\in E}
$$

- This lesson defaults to finite simple undirected graphs.

### Derivation

The order of an undirected edge's endpoints does not matter.

$$
A_{ij}=A_{ji}
$$

A simple graph has no loops.

$$
A_{ii}=0
$$

Every edge appears twice in its matrix.

$$
\sum_{i,j}A_{ij}=2|E|
$$

### Interactive diagram

Switch graph structures and compare the edges with the adjacency matrix.

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-graph-representation?view=visual

### Guided experiment

1. **Graph mode: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $6$; degree sum $12$.

2. **Graph mode: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $5$; degree sum $10$.

3. **Graph mode: 5** Set the control to $5$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $6$; degree sum $12$.

### Worked examples

#### Example 1: Read a matrix

How many ones are in the adjacency matrix of a triangle?

- Each of three undirected edges occupies two mirrored cells.
- Every diagonal cell is zero.

**Answer: Six.**

#### Example 2: Equal degrees are insufficient

Are a six-cycle and two disjoint triangles isomorphic?

- Every vertex in both graphs has degree two.
- The first is connected and the second disconnected; isomorphism preserves connectedness.

**Answer: No.**

### Common mistakes

- **Every crossing in a graph drawing is a vertex** Only designated vertices count; crossing lines alone create no new vertex.

- **Equal degrees imply isomorphism** All adjacency relations must be preserved too.

### Exercises and solutions

**1. What is the maximum number of edges in a five-vertex simple graph?**

Hint: One edge per pair of distinct vertices.

Answer: Ten.

- $\binom52=10$.

**2. Does moving vertices in the drawing change the graph?**

Hint: Keep adjacency unchanged.

Answer: No.

- Geometric position is not part of the graph structure here.

**3. Is a simple undirected graph's adjacency matrix symmetric?**

Hint: Both directions describe the same edge.

Answer: Yes.

- Mirror cells agree.

**4. Does an equal degree sequence prove isomorphism?**

Hint: Use the six-cycle and two disjoint triangles.

Answer: No.

- Their degrees agree but connectedness differs.

Prerequisites: Binary relations and relation matrices.

## 7.2 Degrees and the handshaking lemma

*Each undirected edge contributes two endpoints, so the degree sum equals twice the edge count.*

### The idea

Each undirected edge contributes two endpoints, so the degree sum equals twice the edge count.

### Intuition

Count edge endpoints in two ways: by vertex or by edge.

### Another explanation

Each endpoint contributes one.

### Quick check

Does an even degree sum suffice for every proposed simple-graph degree sequence?

A. Yes
B. No
C. Yes, if no entry is zero

Answer: B. Individual degree bounds and other structural constraints are also needed.

### Define vertex degree

In a simple undirected graph, degree is the neighbor count. If loops are allowed, each contributes two; this book's interactive graphs have no loops.

### Derive the handshaking lemma

Every edge has two endpoints. Adding all degrees counts each endpoint once, directly applying double counting.

### Check degree feasibility

The degree sum and the number of odd-degree vertices must both be even. These are necessary conditions, not a guarantee that an arbitrary sequence is realizable by a simple graph.

### Definition and conditions

A finite undirected graph has an even number of odd-degree vertices.

$$
\sum_{v\in V}\deg(v)=2|E|
$$

- The counted objects are undirected edge endpoints.

### Derivation

Count endpoints by vertex.

$$
\#\text{endpoints}=\sum_v\deg(v)
$$

Count endpoints by edge.

$$
\#\text{endpoints}=2|E|
$$

Reduce modulo two to count odd terms.

$$
\sum_v\deg(v)\equiv\#\{v:\deg(v)\text{ odd}\}\equiv0\pmod2
$$

### Interactive diagram

Switch graph structures. Do the vertex degrees sum to twice the edge count?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-degrees?view=visual

### Guided experiment

1. **Graph mode: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $6$; degree sum $12$.

2. **Graph mode: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $5$; degree sum $10$.

3. **Graph mode: 5** Set the control to $5$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $6$; degree sum $12$.

### Worked examples

#### Example 1: Count edges

Four vertices each have degree three. How many edges are there?

- The degree sum is twelve.
- Divide by two to obtain the edge count.

**Answer: Six.**

#### Example 2: An impossible sequence

Can three vertices have degrees three, one, and zero?

- The sum is even.
- But a simple three-vertex graph has maximum degree two.

**Answer: No. An even sum is insufficient.**

### Common mistakes

- **Each edge contributes one to the degree sum** Each endpoint contributes one.

- **The handshaking lemma guarantees connectedness** It constrains endpoint counts only.

### Exercises and solutions

**1. Six vertices each have degree two. How many edges are there?**

Hint: Divide the degree sum by two.

Answer: Six.

- $6\cdot2/2=6$.

**2. Can there be exactly one odd-degree vertex?**

Hint: The number of odd-degree vertices must be even.

Answer: No.

- One is an odd count.

**3. If all degrees are even, must the graph be connected?**

Hint: Consider two disjoint cycles.

Answer: Not necessarily.

- Every vertex has degree two, but there are two components.

**4. What is the largest possible degree in a five-vertex simple graph?**

Hint: A vertex can connect only to the other vertices.

Answer: Four.

- It has at most four neighbors.

Prerequisites: Graphs, adjacency lists, and adjacency matrices, The pigeonhole principle and double counting.

## 7.3 Connectivity, breadth-first search, and bipartite graphs

*Breadth-first search explores by distance layers; the layer number is the minimum number of edges from the source.*

### The idea

Breadth-first search explores by distance layers; the layer number is the minimum number of edges from the source.

### Intuition

Visit vertices one edge away before those two edges away. For now, every edge costs one.

### Another explanation

Only edges crossing between sides are required.

### Quick check

Why is the first discovered BFS distance shortest?

A. Smaller-distance layers expand first
B. The vertices are drawn nearby
C. The smallest-numbered vertex is always chosen

Answer: A. Every shorter layer is processed first.

### Find connected components

Traverse every vertex reachable from an unvisited vertex to obtain one component. Repeat until all vertices are visited to count the whole graph's components.

### Use a queue to build layers

A first-in, first-out queue expands shorter distances first. Record a parent when discovering each vertex to reconstruct a shortest edge-count path.

### Test bipartiteness

Color by the parity of BFS distance. An edge joining same-colored vertices produces an odd cycle. Every component must be conflict-free for the graph to be bipartite.

### Definition and conditions

A finite undirected graph is bipartite exactly when it has no odd cycle.

$$
V=L\sqcup R,\quad\forall\{u,v\}\in E:\ u\in L\iff v\in R
$$

- The shortest-edge-count result applies to unweighted graphs or equal-weight edges.
- A bipartiteness test must cover all components.

### Derivation

In a bipartite graph, each edge alternates between the two sides.

$$
L\to R\to L\to\cdots
$$

Returning to the start takes an even number of steps.

$$
\text{bipartite}\implies\text{no odd cycle}
$$

Conversely, color by distance parity; a same-color edge closes an odd cycle.

$$
\text{no odd cycle}\implies\text{two-colorable}
$$

### Interactive diagram

Expand the queue step by step. How do the distance layers and two color classes form?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-connectivity?view=visual

### Guided experiment

1. **Steps executed: 0** Set the control to $0$. Compare the current step with the complete reference result.

Preset observation: At this setting: vertices $6$; edges $6$; graph components $1$; graph bipartite: yes.

2. **Steps executed: 3** Set the control to $3$. Compare the current step with the complete reference result.

Preset observation: At this setting: vertices $6$; edges $6$; graph components $1$; graph bipartite: yes.

3. **Steps executed: 6** Set the control to $6$. Compare the current step with the complete reference result.

Preset observation: At this setting: vertices $6$; edges $6$; graph components $1$; graph bipartite: yes.

### Worked examples

#### Example 1: Fewest edges

In a four-cycle, how many edges are needed to reach the opposite vertex?

- Adjacent vertices are at distance one.
- The opposite vertex is first discovered in the next layer.

**Answer: Two.**

#### Example 2: A triangle

Is a triangle bipartite?

- Alternate colors around its three edges.
- Returning forces the starting vertex to have both colors, a contradiction.

**Answer: No.**

### Common mistakes

- **A bipartite graph needs equally large sides** Only edges crossing between sides are required.

- **One component suffices to test bipartiteness** Another component may still contain an odd cycle.

### Exercises and solutions

**1. Is every tree bipartite?**

Hint: A tree has no cycle.

Answer: Yes.

- It therefore has no odd cycle.

**2. Does BFS directly solve shortest paths with arbitrary unequal nonnegative weights?**

Hint: Layers count edges only.

Answer: Not directly.

- Unequal weights require a weighted-path algorithm.

**3. How many components do two disjoint triangles have?**

Hint: Start separately from unvisited vertices.

Answer: Two.

- There are two individually connected parts.

**4. Does an isolated vertex count as a component?**

Hint: A length-zero path reaches itself.

Answer: Yes.

- It forms a one-vertex component.

Prerequisites: Graphs, adjacency lists, and adjacency matrices, Loop invariants and termination.

## 7.4 Euler trails and Hamilton cycles

*Euler asks to use each edge once; Hamilton asks to visit each vertex once.*

### The idea

Euler asks to use each edge once; Hamilton asks to visit each vertex once.

### Intuition

The names are often encountered together, but the constraints concern different objects.

### Another explanation

They constrain different objects.

### Quick check

Which problem asks to use every edge exactly once?

A. Hamilton
B. Euler
C. Vertex coloring

Answer: B. Euler constrains edges; Hamilton constrains vertices.

### Check Euler conditions

After isolated vertices are ignored, the positive-degree part must be connected and have exactly zero or two odd-degree vertices for an Euler trail. An Euler circuit requires every degree even.

### Pair arrivals and departures

At an intermediate vertex, each arrival needs a different departure edge, pairing its incident edges. In an open trail, the endpoints may each have one unpaired edge.

### Do not transfer this test to Hamilton cycles

A Hamilton cycle visits every vertex once before returning to its start. Degree parity does not decide its existence; examples cannot establish a criterion for every graph.

### Definition and conditions

These Euler criteria require only the part containing edges to be connected.

$$
\text{Euler circuit}\iff\text{positive-degree part connected and all degrees even}
$$

- The graph is finite and undirected. An edgeless graph's empty walk is treated separately as a trivial case.
- Hamilton cycles in this book require at least three vertices.

### Derivation

A circuit pairs arrivals and departures at every vertex.

$$
\deg(v)=2k_v
$$

For sufficiency, first follow unused edges to form a circuit.

$$
\text{Even degrees prevent getting stuck early elsewhere}
$$

If unused edges remain, splice in another circuit from a vertex on the existing one.

$$
\text{Each round uses at least one edge, so finitely many rounds suffice}
$$

### Interactive diagram

Compare a cycle, path, star, and two triangles sharing a vertex. Do Euler and Hamilton conclusions agree?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-euler-hamilton?view=visual

### Guided experiment

1. **Graph mode: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $6$; odd-degree vertices $0$; Euler trail: yes; Euler circuit: yes; Hamilton cycle: yes.

2. **Graph mode: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $5$; odd-degree vertices $6$; Euler trail: no; Euler circuit: no; Hamilton cycle: no.

3. **Graph mode: 5** Set the control to $5$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $5$; edges $6$; odd-degree vertices $0$; Euler trail: yes; Euler circuit: yes; Hamilton cycle: no.

### Worked examples

#### Example 1: A star

Does a star with four leaves have an Euler trail?

- Its four leaves have degree one.
- There are four odd-degree vertices, not zero or two.

**Answer: No.**

#### Example 2: Two triangles sharing one vertex

Two triangles share exactly one vertex and no edges. Does their union have an Euler circuit or a Hamilton cycle?

- The center has degree four and every other vertex degree two; the graph is connected, so it has an Euler circuit.
- The center is a cut vertex. A Hamilton cycle cannot connect both sides while visiting it only once.

**Answer: An Euler circuit exists; no Hamilton cycle exists.**

### Common mistakes

- **The two path notions are interchangeable** They constrain different objects.

- **Degree criteria need no connectedness condition** Separate edge-containing components cannot form one trail.

### Exercises and solutions

**1. Does a four-cycle have an Euler circuit?**

Hint: It is connected, with every degree two.

Answer: Yes.

- It satisfies the circuit criterion.

**2. How many odd-degree vertices does a three-edge path have?**

Hint: Endpoints have degree one; internal vertices have degree two.

Answer: Two.

- Only the two endpoints have odd degree.

**3. May an Euler trail revisit vertices?**

Hint: Only repeated edges are prohibited.

Answer: Yes.

- Vertices may be visited repeatedly.

**4. Must a Hamilton cycle use every edge?**

Hint: Its constraint concerns vertices.

Answer: No.

- Edges outside the cycle need not be used.

Prerequisites: Degrees and the handshaking lemma, Connectivity, breadth-first search, and bipartite graphs.

## 7.5 Planar graphs and vertex coloring

*Planarity asks for a drawing without crossing edges; coloring requires adjacent vertices to differ in color.*

### The idea

Planarity asks for a drawing without crossing edges; coloring requires adjacent vertices to differ in color.

### Intuition

A drawing with crossings does not prove nonplanarity: another drawing may avoid them.

### Another explanation

It can rule out planarity, but cannot establish it.

### Quick check

Do crossing edges in a drawing directly prove nonplanarity?

A. Yes
B. No
C. Yes, if there are two crossings

Answer: B. Planarity asks whether some other drawing avoids all crossings.

### Use Euler's formula

For a connected plane graph, counting the unbounded face, vertices minus edges plus faces equals two. With several components, the right side becomes one plus the component count.

### Derive necessary edge bounds

A simple planar graph with at least three vertices has at most three times the vertex count minus six edges. If also bipartite, the bound becomes twice the vertex count minus four.

### Construct a coloring

In a fixed vertex order, greedy coloring chooses a color unused by already colored neighbors. It needs at most maximum degree plus one colors, but may not achieve the minimum.

### Definition and conditions

Edge bounds are necessary for planarity, not sufficient tests.

$$
v-e+f=2,\quad e\le3v-6,\quad e\le2v-4\ \text{if also bipartite}
$$

- Euler's formula in this form requires a connected plane embedding.
- Both edge bounds require a simple graph with at least three vertices.

### Derivation

Each edge meets two face boundaries; a bridge is counted twice.

$$
\sum_F\ell(F)=2e
$$

In the relevant nondegenerate simple plane embeddings, each face boundary has at least three edge occurrences.

$$
3f\le2e
$$

Combine this with Euler's formula; tree boundary cases satisfy the bound directly.

$$
e\le3v-6
$$

### Interactive diagram

Compare colorings with edge bounds. Which conclusions give only necessary conditions?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-planarity-coloring?view=visual

### Guided experiment

1. **Graph mode: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $6$; greedy colors in this order $2$; ordinary planar edge bound $12$; bipartite: yes.

2. **Graph mode: 2** Set the control to $2$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $5$; greedy colors in this order $2$; ordinary planar edge bound $12$; bipartite: yes.

3. **Graph mode: 5** Set the control to $5$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $6$; greedy colors in this order $3$; ordinary planar edge bound $12$; bipartite: no.

### Worked examples

#### Example 1: The complete five-vertex graph

Can the complete five-vertex graph be drawn in the plane without crossings?

- It has five vertices and ten edges.
- The planar bound permits at most nine edges.

**Answer: No.**

#### Example 2: The complete three-by-three bipartite graph

Can the complete three-by-three bipartite graph be planar?

- It is bipartite, with six vertices and nine edges.
- The bipartite planar bound permits at most eight edges.

**Answer: No; the ordinary three-times-vertices bound is insufficient here.**

### Common mistakes

- **The edge bound is a sufficient criterion** It can rule out planarity, but cannot establish it.

- **Greedy coloring always uses the fewest colors** The vertex order can affect its result.

### Exercises and solutions

**1. A connected plane embedding has five vertices and six edges. How many faces does it have?**

Hint: Use Euler's formula, including the unbounded face.

Answer: Three.

- $f=2-5+6=3$.

**2. Does satisfying the edge bound guarantee planarity?**

Hint: Necessary does not mean sufficient.

Answer: No.

- The complete three-by-three graph satisfies the ordinary bound but is not planar.

**3. What is the chromatic number of an even cycle?**

Hint: Alternate colors around the cycle.

Answer: Two.

- Two colors work; an edge rules out one.

**4. What is the chromatic number of the complete four-vertex graph?**

Hint: Every pair of vertices is adjacent.

Answer: Four.

- Each vertex needs a different color.

Prerequisites: Degrees and the handshaking lemma, Connectivity, breadth-first search, and bipartite graphs.

## Chapter review

Try independently before reading the solutions.

**1. Compare degrees, connectivity, and bipartiteness of a six-cycle and two disjoint triangles.**

Hint: Equal degrees do not determine structure.

Answer: Equal degrees, but nonisomorphic graphs.

- Both have six vertices, six edges, and every degree two.
- The six-cycle is connected and bipartite; the two triangles have two components and are not bipartite.

**2. A connected plane graph has six vertices and eight edges. How many faces? Do those counts alone prove every such graph planar?**

Hint: Use the equality under its hypotheses, then distinguish necessary and sufficient conditions.

Answer: Four faces; counts alone do not establish planarity.

- If connected and planar as stated, $f=2-6+8=4$.
- Vertex and edge counts alone do not decide planarity in general.

# Chapter 8 · Trees and network algorithms

Find paths and connections under constraints.

Goals:
- Connectivity and acyclicity
- Specify the optimization target
- Define a matching

## 8.1 Trees and spanning trees

*A tree connects all its vertices with just enough edges and no cycle.*

### The idea

A tree connects all its vertices with just enough edges and no cycle.

### Intuition

A tree has exactly one simple path between any two vertices. Adding an edge creates a cycle.

### Another explanation

Spanning means covering every vertex.

### Quick check

Does one fewer edge than vertices guarantee a tree?

A. Yes
B. Connectivity or acyclicity is also needed
C. Only for an odd vertex count

Answer: B. A triangle plus an isolated vertex is a counterexample.

### Connectivity and acyclicity

A tree is a finite nonempty connected undirected graph without cycles. A forest may have several components, each a tree.

### Count tree edges

Delete a leaf and its sole incident edge: the remaining graph stays a tree. Induction gives one fewer edge than vertices; a forest has vertices minus components edges.

### Construct a spanning tree

Repeatedly delete an edge from a cycle in a connected graph. Connectivity remains, and the finite process ends in a tree covering every vertex. Spanning trees need not be unique.

### Definition and conditions

A finite tree has a unique simple path between any two vertices.

$$
e=v-1,\quad e=v-c\ \text{for a forest}
$$

- A tree is nonempty; a forest may have several components.
- The edge-count equality alone does not establish that a given graph is a tree.

### Derivation

A tree with at least two vertices has a leaf.

$$
\text{Endpoints of a longest simple path have degree one}
$$

Deleting a leaf gives a smaller tree.

$$
v'=v-1,\ e'=e-1
$$

Induct from a single-vertex tree.

$$
e=v-1
$$

### Interactive diagram

Compare trees with cyclic and disconnected graphs. Why is edge counting alone insufficient?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-trees?view=visual

### Guided experiment

1. **Graph mode: 0** Set the control to $0$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $5$; components $1$; tree: yes.

2. **Graph mode: 1** Set the control to $1$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $5$; components $1$; tree: yes.

3. **Graph mode: 3** Set the control to $3$. Observe which objects, relations, or counts change.

Preset observation: At this setting: vertices $6$; edges $5$; components $2$; tree: no.

### Worked examples

#### Example 1: Tree edge count

How many edges does an eight-vertex tree have?

- A nonempty tree has one fewer edge than vertices.
- $8-1=7$.

**Answer: Seven.**

#### Example 2: An insufficient equality

A triangle plus an isolated vertex has four vertices and three edges. Is it a tree?

- Its edge count equals its vertex count minus one.
- But it is disconnected and contains a cycle.

**Answer: No.**

### Common mistakes

- **A spanning tree covers only some vertices** Spanning means covering every vertex.

- **A tree has only one path in total** Each pair of endpoints has a unique path; different pairs have different paths.

### Exercises and solutions

**1. A seven-vertex forest has three components. How many edges does it have?**

Hint: Use the forest formula.

Answer: Four.

- $7-3=4$.

**2. What happens when a new edge is added to a tree?**

Hint: Its endpoints already have one simple path between them.

Answer: A cycle forms.

- The new edge and that path form one new cycle.

**3. Does every connected graph have a spanning tree?**

Hint: Delete cycle edges successively.

Answer: Yes.

- After finitely many steps it remains connected and becomes acyclic.

**4. Is a one-vertex, zero-edge graph a tree?**

Hint: Check connectivity and acyclicity.

Answer: Yes.

- The length-zero path connects the vertex to itself, and there is no cycle.

Prerequisites: Connectivity, breadth-first search, and bipartite graphs, Mathematical induction.

## 8.2 Rooted trees, traversals, and prefix codes

*Choosing a root gives edges parent–child roles. A traversal specifies the visiting order.*

### The idea

Choosing a root gives edges parent–child roles. A traversal specifies the visiting order.

### Intuition

Preorder visits the parent first; postorder handles children first. The task determines the useful order.

### Another explanation

Such an order must be specified.

### Quick check

When does postorder visit the root?

A. After all children
B. First
C. Between the left and right children

Answer: A. Finish the subproblems before handling the root.

### Specify child order

A rooted tree specifies parent–child relations. A unique traversal sequence also needs an ordering of children. This lesson uses ordered binary trees with left and right positions.

### Distinguish three traversals

Preorder is root–left–right, inorder left–root–right, and postorder left–right–root. Inorder here specifically concerns binary trees with designated left and right children.

### Understand prefix codes

Place characters at leaves, labeling left edges zero and right edges one. No leaf's code prefixes another's, so bit-by-bit decoding is unique.

### Definition and conditions

In a prefix code, no codeword is a proper prefix of another.

$$
\text{leaf path codes}\implies\text{prefix-free}
$$

- An ordered binary tree has fixed left and right child positions.
- Characters occupy distinct leaves of the coding tree.

### Derivation

Suppose one code prefixes another leaf's code.

$$
c(u)\prec c(v)
$$

Its vertex lies inside the other root-to-leaf path.

$$
u\text{ is an ancestor of }v\text{}
$$

A leaf cannot have descendants, giving a contradiction.

$$
u\text{ is a leaf}\implies\text{no proper descendants}
$$

### Interactive diagram

Switch traversal orders and advance through the visited vertices.

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-rooted-trees?view=visual

### Guided experiment

1. **Steps executed: 0** Set the control to $0$. Compare the current step with the complete reference result.

Preset observation: At this setting: vertices visited $0$.

2. **Steps executed: 3** Set the control to $3$. Compare the current step with the complete reference result.

Preset observation: At this setting: vertices visited $3$.

3. **Steps executed: 7** Set the control to $7$. Compare the current step with the complete reference result.

Preset observation: At this setting: vertices visited $7$.

### Worked examples

#### Example 1: Three-vertex traversals

The root is A, its left child B, and its right child C. Give the three traversals.

- Preorder visits A, then B and C.
- Inorder is B, A, C; postorder is B, C, A.

**Answer: A–B–C; B–A–C; B–C–A.**

#### Example 2: A prefix code?

Can codewords $0,10,11$ be uniquely decoded bit by bit?

- None is a prefix of another.
- On reaching a leaf, output its symbol and return to the root.

**Answer: Yes.**

### Common mistakes

- **Every rooted tree has a natural left-to-right order** Such an order must be specified.

- **Unique decodability is equivalent to prefix-freeness** Prefix-freeness is sufficient, but not necessary, for unique decodability.

### Exercises and solutions

**1. When does preorder visit the root?**

Hint: “Pre” means before its subtrees.

Answer: First.

- Before either subtree is visited.

**2. Are codewords $0,01$ prefix-free?**

Hint: Check whether the first begins the second.

Answer: No.

- Zero is a proper prefix of zero-one.

**3. Does a rooted tree without child ordering have a unique traversal sequence?**

Hint: Siblings can be exchanged.

Answer: No.

- An extra ordering convention is needed.

**4. How many internal vertices does a full binary tree with eight leaves have?**

Hint: Use the structural-induction result.

Answer: Seven.

- $I=L-1=7$.

Prerequisites: Recursive definitions and structural induction, Trees and spanning trees.

## 8.3 Minimum spanning trees and Kruskal's algorithm

*A minimum spanning tree connects every vertex with the smallest total edge cost.*

### The idea

A minimum spanning tree connects every vertex with the smallest total edge cost.

### Intuition

Consider cheaper edges first, keeping an edge whenever it does not close a cycle.

### Another explanation

Their objective functions differ.

### Quick check

What directly determines whether Kruskal accepts an edge?

A. It joins distinct current components
B. It is nearest the root
C. Its endpoints have different colors

Answer: A. An edge within one component creates a cycle.

### Specify the optimization target

Assign edge weights to a connected undirected graph and minimize the sum over spanning trees. This differs from minimizing each path from one source.

### Merge by increasing weight

Kruskal scans edges in nondecreasing weight order. Accept an edge joining distinct components; reject an edge within one component because it creates a cycle.

### Justify the greedy choice

Use an exchange argument. The chosen edge crosses the cut around a current component; it can replace a no-lighter edge across that cut in an optimal compatible tree, preserving optimality.

### Definition and conditions

Kruskal permits negative weights. A disconnected input gives a minimum spanning forest.

$$
T^*=\arg\min_{T\text{ spanning tree}}\sum_{e\in T}w(e)
$$

- The input is a finite undirected graph with comparable edge weights.
- A single tree spanning every vertex exists only for a connected graph.

### Derivation

Choose the lightest edge crossing the current cut.

$$
w(e)\le w(f)\quad\text{for every crossing edge }f
$$

Add it to a compatible optimal tree, creating a cycle.

$$
T+e\text{ contains a cycle}
$$

Delete another crossing edge from that cycle.

$$
w(T+e-f)\le w(T)
$$

### Interactive diagram

Scan edges successively. Which are accepted, and which are skipped because they close a cycle?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-minimum-spanning?view=visual

### Guided experiment

1. **Steps executed: 0** Set the control to $0$. Compare the current step with the complete reference result.

Preset observation: At this setting: accepted edges $0$; current cost $0$.

2. **Steps executed: 4** Set the control to $4$. Compare the current step with the complete reference result.

Preset observation: At this setting: accepted edges $4$; current cost $8$.

3. **Steps executed: 9** Set the control to $9$. Compare the current step with the complete reference result.

Preset observation: At this setting: accepted edges $5$; current cost $13$.

### Worked examples

#### Example 1: A triangle

A triangle has edge weights one, two, and four. What is its minimum spanning-tree cost?

- Take one, then two; no cycle has formed.
- Reject the weight-four edge because it closes a cycle.

**Answer: Three.**

#### Example 2: Nonunique optima

If every triangle edge has weight one, is its minimum spanning tree unique?

- Deleting any one edge gives a spanning tree.
- All three choices cost two.

**Answer: No.**

### Common mistakes

- **A minimum spanning tree is a shortest-path tree** Their objective functions differ.

- **Tied weights mean there is no solution** An optimum still exists, but may not be unique.

### Exercises and solutions

**1. How many edges does a five-vertex minimum spanning tree have?**

Hint: It is a spanning tree first.

Answer: Four.

- Its edge count is five minus one.

**2. Do negative weights invalidate Kruskal's algorithm?**

Hint: The exchange proof uses only weight comparisons.

Answer: No.

- Nonnegative weights are not required.

**3. Why reject an edge that creates a cycle?**

Hint: A spanning tree cannot contain a cycle.

Answer: It avoids a cycle while preserving greedy optimality.

- Earlier accepted edges are no heavier, so this cycle edge is unnecessary.

**4. Does a minimum spanning tree always give shortest source-to-vertex paths?**

Hint: Its objective is total edge cost, not individual path length.

Answer: Not necessarily.

- The optimization objectives differ.

Prerequisites: Trees and spanning trees, Direct proofs, cases, and counterexamples.

## 8.4 Dijkstra's shortest-path algorithm

*With nonnegative edge weights, the unsettled vertex with smallest tentative distance can safely be finalized.*

### The idea

With nonnegative edge weights, the unsettled vertex with smallest tentative distance can safely be finalized.

### Intuition

Finalize a distance that no later detour can shorten, then use it to update neighbors.

### Another explanation

Unequal weights require comparing costs.

### Quick check

What core condition ensures Dijkstra's correctness?

A. Nonnegative edge weights
B. Equal degrees at every vertex
C. A complete graph

Answer: A. A negative edge can let a later detour improve a finalized distance.

### Store distances and parents

The source starts at distance zero; other vertices are initially unreachable. Relax an edge by comparing the old distance with the route through the current vertex.

### Choose a vertex to finalize

Nonnegative weights prevent a later route through a larger tentative distance from reducing an already finalized smaller one. Negative weights invalidate this argument.

### Distinguish implementation costs

A basic implementation linearly scans for each minimum and usually takes quadratic time. Adjacency lists and a priority queue improve sparse-graph cost, but require updates or duplicate-entry handling.

### Definition and conditions

Shortest paths permit an empty path; the source distance is zero.

$$
d(v)\leftarrow\min\{d(v),d(u)+w(u,v)\}
$$

- Dijkstra requires nonnegative edge weights.
- Unreachable vertices are displayed as unreachable, not assigned a fictitious finite distance.

### Derivation

Suppose the current vertex is the first incorrectly finalized one.

$$
d(u)>\operatorname{dist}(s,u)
$$

On a shorter path, the first unsettled vertex already has a tentative value no greater than that path's prefix length.

$$
d(v)\le\operatorname{dist}(s,v)
$$

The nonnegative suffix and minimum selection yield a contradiction.

$$
d(v)\le\operatorname{dist}(s,u)<d(u)
$$

### Interactive diagram

Finalize vertices step by step. Which relaxations actually improve distances?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-shortest-path?view=visual

### Guided experiment

1. **Steps executed: 0** Set the control to $0$. Compare the current step with the complete reference result.

Preset observation: At this setting: finalized vertices $0$.

2. **Steps executed: 3** Set the control to $3$. Compare the current step with the complete reference result.

Preset observation: At this setting: finalized vertices $3$.

3. **Steps executed: 6** Set the control to $6$. Compare the current step with the complete reference result.

Preset observation: At this setting: finalized vertices $6$.

### Worked examples

#### Example 1: A shorter route through another vertex

Edges A–C, A–B, and B–C cost seven, two, and three. What is the shortest A–C distance?

- Finalize B at distance two first.
- Relax C to two plus three, improving seven.

**Answer: Five.**

#### Example 2: A negative-weight counterexample

Directed edges from the source to A and B cost one and two, and B to A costs negative three. Can Dijkstra be used directly?

- It may finalize A at distance one first.
- The route through B actually costs negative one.

**Answer: No; the nonnegative-weight assumption fails.**

### Common mistakes

- **BFS layers suffice for weighted graphs too** Unequal weights require comparing costs.

- **A finalized vertex's distance may be changed arbitrarily** The nonnegative-weight condition guarantees finalized distances are correct.

### Exercises and solutions

**1. Which simpler algorithm works if every edge has weight one?**

Hint: Explore by edge-count layers.

Answer: BFS.

- Breadth-first search.

**2. Under this lesson's convention, what is the source's distance to itself?**

Hint: Empty paths are allowed and weights are nonnegative.

Answer: Zero.

- The empty path costs zero.

**3. Are tentative distances always final distances?**

Hint: Unsettled vertices can still be relaxed.

Answer: No.

- A tentative value is only the best currently known upper bound.

**4. Can a minimum-spanning-tree algorithm directly replace a shortest-path algorithm?**

Hint: Compare the objectives.

Answer: No.

- Minimum total tree cost does not guarantee shortest paths between its vertices.

Prerequisites: Connectivity, breadth-first search, and bipartite graphs, Loop invariants and termination.

## 8.5 Bipartite matching, augmenting paths, and flow

*One-to-one assignment depends on rearranging existing assignments as well as finding free positions.*

### The idea

One-to-one assignment depends on rearranging existing assignments as well as finding free positions.

### Intuition

An augmenting path alternates unmatched and matched edges. Flipping them adds exactly one matched pair.

### Another explanation

Maximal rules out only a directly added edge.

### Quick check

How does flipping an augmenting path change matching size?

A. Increases it by one
B. Leaves it unchanged
C. Increases it by the path's edge count

Answer: A. The alternating path has exactly one extra unmatched edge.

### Define a matching

A matching is a set of edges with no shared endpoints. A maximal matching permits no directly added edge; a maximum matching has the largest possible size. They differ.

### Flip an augmenting path

From an unmatched left vertex to an unmatched right vertex, alternate unmatched and matched edges. After flipping, intermediate vertices remain matched once, and the endpoints add one pair.

### Connect Hall's theorem and flow

Every left vertex can be matched exactly when each left subset has at least as many neighbors. Adding a source, sink, and unit-capacity edges makes integer flows correspond to matchings. Checking only the entire left side is insufficient.

### Definition and conditions

Hall's condition checks every subset of the left side.

$$
\forall S\subseteq L:\ |N(S)|\ge|S|\iff\text{a matching saturating }L\text{ exists}
$$

- The graph is finite and bipartite.
- Edges represent allowed pairs; each endpoint has capacity one.

### Derivation

A matched left subset needs distinct neighbors.

$$
|N(S)|\ge|S|
$$

An augmenting path has one more unmatched edge than matched edge.

$$
\#\text{unmatched edges}=\#\text{matched edges}+1
$$

Flipping increases the matching size by one.

$$
|M'|=|M|+1
$$

### Interactive diagram

Compare a local greedy assignment with rearrangement along an augmenting path. Why does the matching size increase?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/dm-matching?view=visual

### Guided experiment

1. **Steps executed: 0** Set the control to $0$. Compare the current step with the complete reference result.

Preset observation: At this setting: current matching size $0$; complete maximum matching $3$.

2. **Steps executed: 1** Set the control to $1$. Compare the current step with the complete reference result.

Preset observation: At this setting: current matching size $1$; complete maximum matching $3$.

3. **Steps executed: 3** Set the control to $3$. Compare the current step with the complete reference result.

Preset observation: At this setting: current matching size $3$; complete maximum matching $3$.

### Worked examples

#### Example 1: A rearrangement is needed

A connects to right vertices one and two; B connects only to one. If A is matched to one, can B still be matched?

- Follow B to one, the existing matching back to A, then A to two.
- Flip to match B with one and A with two.

**Answer: Yes; augmentation gives two pairs.**

#### Example 2: Total neighbors are insufficient

Among three left vertices, A and B connect only to one, while C connects to two and three. Can all three be matched?

- The entire left side has three neighbors, apparently enough.
- But the subset A and B has only one neighbor, violating Hall's condition.

**Answer: No; the maximum size is two.**

### Common mistakes

- **Maximal means maximum** Maximal rules out only a directly added edge.

- **Enough positions in total guarantee a full assignment** Too few neighbors for a local subset can still block it.

### Exercises and solutions

**1. What is the maximum matching size in a complete three-by-four bipartite graph?**

Hint: The smaller side bounds the size, and that bound is attainable.

Answer: Three.

- The three left vertices can use distinct right vertices.

**2. Is every maximal matching maximum?**

Hint: Not being able to add an edge directly does not rule out rearrangement.

Answer: No.

- A length-three augmenting path can enlarge a maximal matching.

**3. How much does one augmentation increase the matching size?**

Hint: The endpoints gain a pair; intermediate matches are rearranged.

Answer: One.

- One pair is added.

**4. Does Hall's condition need to check only the entire left side?**

Hint: A local subset may compete for too few neighbors.

Answer: No.

- Every subset must be checked.

Prerequisites: Connectivity, breadth-first search, and bipartite graphs, Functions, injections, and surjections.

## Chapter review

Try independently before reading the solutions.

**1. A triangle has edge weights one, two, and two. Find its minimum spanning-tree cost and decide uniqueness.**

Hint: Take the lightest edge and either weight-two edge.

Answer: Cost three; nonunique.

- The cost is three.
- Either weight-two edge completes the tree, so the optimum is not unique.

**2. Why might three left vertices with three total neighbors still lack a matching covering the left side?**

Hint: Make two left vertices compete for a single neighbor.

Answer: Check the neighborhood size of every subset.

- A and B connect only to one; C connects to two and three.
- The subset A and B has only one neighbor, violating Hall's condition.

# Final assessment

Try independently before revealing the solutions. Use them for self-assessment, not certification.

**1. Prove that among any six integers, two have a difference divisible by five.**

Hint: Classify by remainders modulo five.

Answer: This follows from the pigeonhole principle.

- There are only five residue classes.
- Two of the six integers share a class, so their difference is divisible by five.

**2. Choose a three-person group from six people and designate one leader. Count in two ways.**

Hint: Choose the group first or the leader first.

Answer: Sixty.

- Group first: $\binom63\cdot3=60$.
- Leader first: $6\binom52=60$.

**3. Solve $x\equiv2\pmod3,\ x\equiv1\pmod4$ and state the uniqueness modulus.**

Hint: Write the first solution as two plus three times a parameter.

Answer: $x\equiv5\pmod{12}$.

- $2+3t\equiv1\pmod4$, so $t\equiv1\pmod4$.
- $x\equiv5\pmod{12}$; coprime moduli guarantee uniqueness modulo twelve.

**4. Count allocations of four items to four people, each receiving at most two.**

Hint: Extract the fourth-degree generating-function coefficient, or subtract excess allocations from the unrestricted count.

Answer: Nineteen.

- Unrestricted count: $\binom73=35$.
- If a specified person gets at least three, one item remains, giving $\binom43=4$ allocations; subtract sixteen for four people.
- Two people cannot both receive at least three.

**5. Given $a_0=0,a_1=1,a_n=2a_{n-1}$ for $n\ge2$, find the general term and explain the special zero index.**

Hint: Double starting from index one.

Answer: Index zero is zero; subsequent terms are powers of two with exponent one less than the index.

- For $n\ge1$, $a_n=2^{n-1}$.
- List index zero separately as zero; do not force a negative exponent into the formula.

**6. A five-vertex graph has degrees four, one, one, one, one. Is it a tree? Does it have an Euler trail or Hamilton cycle?**

Hint: The center joins all other vertices; the leaves have degree one.

Answer: A tree; neither of the latter two exists.

- It is a four-leaf star tree.
- Four odd-degree vertices rule out an Euler trail; leaves cannot lie on a Hamilton cycle.

**7. Must a shortest-path tree in a nonnegative undirected network be a minimum spanning tree?**

Hint: Use a triangle: source–A costs two, source–B costs two, and A–B costs one.

Answer: No; the optimization objectives differ.

- The shortest-path tree uses both source edges, totaling four.
- A minimum spanning tree uses one source edge and A–B, totaling three.

**8. Left vertices A and B face right vertices one and two. A connects to both; B only to one. After greedily matching A to one, how can a maximum matching be obtained?**

Hint: Find an alternating augmenting path.

Answer: A maximum of two pairs.

- Follow B–one–A–two, alternating unmatched and matched edges.
- Flip to B–one and A–two.

# Glossary

- **Propositions and logical connectives**: First decide whether a statement has a definite truth value; then combine it with other statements.

- **Truth tables and logical equivalence**: Two expressions are logically equivalent only when they agree on every assignment.

- **Quantifiers, domains, and negation**: A quantifier specifies “every” or “at least one”; the domain specifies which objects it concerns.

- **Direct proofs, cases, and counterexamples**: A proof establishes a conclusion from its hypotheses. A counterexample refutes a universal claim.

- **Contraposition and contradiction**: When a direct proof is difficult, rule out a true hypothesis with a false conclusion.

- **Set operations and power sets**: A set ignores order and records each element only once.

- **Functions, injections, and surjections**: A function gives each input one output. An injection has no collisions; a surjection reaches every target.

- **Binary relations and relation matrices**: A relation records which ordered pairs hold, allowing more associations than a function.

- **Equivalence relations and partitions**: An equivalence relation divides objects into disjoint classes.

- **Partial orders, Hasse diagrams, and lattices**: A partial order permits incomparable objects; a total order requires every pair to be comparable.

- **Divisibility, greatest common divisors, and least common multiples**: Divisibility requires an integer quotient. The greatest common divisor is the largest shared positive factor.

- **The Euclidean algorithm and Bézout's identity**: Repeated remainders preserve the gcd while reducing the problem.

- **Primes and unique factorization**: Every integer greater than one factors into primes, uniquely apart from their order.

- **Congruences and modular arithmetic**: Modular arithmetic keeps only remainders, while addition and multiplication remain consistent.

- **Modular inverses and the Chinese remainder theorem**: Coprimality gives inverses and lets two remainder conditions determine a unique class modulo the product.

- **Mathematical induction**: Check a starting case, then prove that each case passes the result to its successor.

- **Strong induction and well-ordering**: When the next case needs several smaller cases, assume all preceding cases in the inductive step.

- **Recursive definitions and structural induction**: Specify basic objects, then rules for building new objects from existing ones.

- **Loop invariants and termination**: Correctness requires both a property preserved at every step and a reason the process must end.

- **Algorithm growth and asymptotic notation**: Asymptotic notation describes eventual upper bounds, lower bounds, or matching orders of growth.

- **The sum and product rules**: Add mutually exclusive cases; multiply successive choices. Check for double counting first.

- **The pigeonhole principle and double counting**: With more objects than containers, some container holds more than one object.

- **Permutations and combinations**: Use permutations when order matters; combinations when only membership matters.

- **The binomial theorem and Pascal's identity**: Expansion coefficients count which factors contribute the same term.

- **Repeated selections and stars and bars**: Distribute identical objects among distinct recipients by encoding counts with stars and bars.

- **Inclusion–exclusion**: After adding overlapping collections, correct each object's repeated count by alternating subtraction and addition.

- **Recurrences and first-order equations**: A recurrence defines the next term; an initial value selects the particular sequence.

- **Second-order linear recurrences**: When the next term depends on two preceding terms, two initial values are needed.

- **Generating functions and constrained counting**: Store counts as power-series coefficients; multiplication then combines independent choices.

- **Counting and discrete probability**: Before converting counts to probabilities, check that elementary outcomes are equally likely.

- **Graphs, adjacency lists, and adjacency matrices**: A graph represents objects by vertices and pairwise relationships by edges.

- **Degrees and the handshaking lemma**: Each undirected edge contributes two endpoints, so the degree sum equals twice the edge count.

- **Connectivity, breadth-first search, and bipartite graphs**: Breadth-first search explores by distance layers; the layer number is the minimum number of edges from the source.

- **Euler trails and Hamilton cycles**: Euler asks to use each edge once; Hamilton asks to visit each vertex once.

- **Planar graphs and vertex coloring**: Planarity asks for a drawing without crossing edges; coloring requires adjacent vertices to differ in color.

- **Trees and spanning trees**: A tree connects all its vertices with just enough edges and no cycle.

- **Rooted trees, traversals, and prefix codes**: Choosing a root gives edges parent–child roles. A traversal specifies the visiting order.

- **Minimum spanning trees and Kruskal's algorithm**: A minimum spanning tree connects every vertex with the smallest total edge cost.

- **Dijkstra's shortest-path algorithm**: With nonnegative edge weights, the unsettled vertex with smallest tentative distance can safely be finalized.

- **Bipartite matching, augmenting paths, and flow**: One-to-one assignment depends on rearranging existing assignments as well as finding free positions.

# Proof supplements and scope

## Notation and boundary conventions

Sets ignore repetition. Graphs default to finite simple undirected graphs. Sequences starting at index zero are explicitly identified. Empty sums are zero, empty products and zero factorial are one. Binomial coefficients are zero outside the selection range from zero to the total. Partial orders are reflexive; Hasse diagrams omit loops and transitive edges.

## Boolean algebra and logic circuits

On the two-element set of truth values, conjunction, disjunction, and negation are Boolean operations. Set intersection, union, and complement obey the same identities. Gates compute truth values, so truth tables compare finite circuits without feedback. Logical equivalence does not imply equal gate counts, delays, or energy use.

## Sizes of infinite sets

Count finite sets by elements; compare infinite cardinalities by bijections. Doubling bijects positive integers with even positive integers, so a proper subset can have the same cardinality as its universe. A diagonal proof of uncountability of the reals must address ambiguities in infinite representations; finite enumeration is not such a proof.

## From recurrences to generating functions

Multiply the Fibonacci recurrence by the corresponding powers and sum from index two. After rearrangement, the initial terms determine the numerator. Interpret every operation coefficientwise in formal power series; each fixed coefficient involves only a finite sum.

## Planar edge bounds and sufficiency

In a connected tree, the sole face boundary traverses each edge twice. For simple plane graphs with at least three vertices and a cycle, handle bridges in the embedding or apply face-boundary counting to the blocks. Trees satisfy the bound directly. The complete three-by-three bipartite graph satisfies the ordinary three-times-vertices bound but violates the bipartite bound: a necessary condition is not a full criterion.

## Sufficiency of Hall's condition: alternating reachable sets

Take a maximum matching. If a left vertex is unmatched, explore from it along unmatched edges to the right and matched edges to the left. Reaching an unmatched right vertex would give an augmentation, contradicting maximal size. Every reached right vertex is therefore matched, and its matched left vertex is reached too. The reached left set contains at least one extra vertex, the initial unmatched one, while all its neighbors lie in the reached right set. This violates Hall's condition. Hence Hall's condition leaves no unmatched left vertex.

## From matching to unit-capacity flow

Connect a source to every left vertex, use allowed pairing edges from left to right, and connect every right vertex to a sink, all with capacity one. A matching defines an integer flow of the same size; conversely, left-to-right edges carrying one in an integer flow define a matching. Reverse residual edges on augmenting paths allow old pairs to be undone. General max-flow/min-cut theory and capacity scaling belong to later algorithms courses.

## Finite states and later courses

A finite-state machine determines its next state from the current state and input symbol. Tracking the parity of ones in a binary string needs only two states: zero preserves the state and one flips it. Induction on input length proves the state equals the parity of the prefix read so far. This book's invariant method applies directly. General automata, formal languages, computability, and complexity belong to later courses.

# Sources and provenance

Explanations, derivations, worked examples, solutions, and diagrams were independently authored by AI. Sources informed scope, hypotheses, and teaching design. Original prose and images were not copied. Checks do not constitute formal proofs.

- [MIT 6.042J · Mathematics for Computer Science](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/pages/syllabus/): Used to check introductory scope and learning objectives for proof, integers, counting, graphs, and process invariants. Text and problems were independently written.

- [Oscar Levin · Discrete Mathematics: An Open Introduction](https://discrete.openmathbooks.org/dmoi4.html): Used to compare the author's published organization of logic, proof, graph theory, counting, and sequences. No text, illustrations, or exercises were copied.

- [Stanford CS103 · Mathematical Foundations of Computing](https://web.stanford.edu/class/cs103/): Used to distinguish this course from later mathematical foundations and computability courses.
