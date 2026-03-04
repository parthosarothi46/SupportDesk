## 🧠 React Concepts 

### 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that lets you write HTML-like markup directly inside JavaScript code. It is used in React to describe what the UI should look like.

```jsx
const element = <h1>Hello, World!</h1>;
```

JSX is not valid JavaScript on its own — it gets compiled by Babel into `React.createElement()` calls:

```js
const element = React.createElement('h1', null, 'Hello, World!');
```

**Why use JSX?**
- It makes UI code more readable and intuitive — you can see the structure at a glance.
- It allows you to embed JavaScript expressions inside `{}` directly in your markup.
- It catches typos and errors at compile time rather than runtime.
- It keeps component logic and view tightly coupled in a single file, which improves maintainability.

---

### 2. What is the difference between State and Props?

| Feature | State | Props |
|---|---|---|
| **Definition** | Internal data managed by the component itself | Data passed from a parent to a child component |
| **Mutability** | Mutable — can be updated with `setState` / `useState` | Immutable — read-only, cannot be changed by the child |
| **Ownership** | Belongs to the component that declares it | Owned by the parent; received by the child |
| **Trigger re-render** | Yes, updating state causes a re-render | Yes, changing props from parent causes re-render |
| **Purpose** | Manages dynamic, changing data | Configures and customizes child components |

**Example:**

```jsx
// State — internal to Banner
const [count, setCount] = useState(0);

// Props — passed from App to Banner
<Banner inProgressCount={count} />
```

In this project, `inProgressCount` and `resolvedCount` are **state** values in `App.jsx`, and they are passed as **props** to the `Banner` component.

---

### 3. What is the useState hook, and how does it work?

`useState` is a built-in React Hook that lets you add state to a functional component.

**Syntax:**
```js
const [stateVariable, setStateFunction] = useState(initialValue);
```

- `stateVariable` — holds the current value.
- `setStateFunction` — a function to update the value. Calling it triggers a re-render.
- `initialValue` — the starting value (number, string, array, object, etc.).

**How it works:**

1. React stores the state value internally for that component.
2. When `setStateFunction` is called with a new value, React schedules a re-render.
3. On re-render, `stateVariable` holds the updated value.

**Example from this project:**

```jsx
const [tickets, setTickets] = useState(ticketsData);       // list of open tickets
const [inProgressTasks, setInProgressTasks] = useState([]); // tasks being worked on
const [resolvedCount, setResolvedCount] = useState(0);      // number resolved
```

---

### 4. How can you share state between components in React?

React follows a **unidirectional data flow** — data flows down from parent to child via props. To share state between components, you **lift state up** to the nearest common ancestor.

**Pattern: Lift State Up**

If two sibling components need access to the same data, move (lift) that state to their shared parent. The parent then passes it down as props and provides update functions as callback props.

```jsx
// App.jsx (parent) owns the shared state
const [inProgressTasks, setInProgressTasks] = useState([]);

// Passes data to Banner
<Banner inProgressCount={inProgressTasks.length} />

// Passes data + callback to TaskStatus
<TaskStatus tasks={inProgressTasks} onComplete={handleComplete} />
```

**Other approaches:**
- **Context API** — For deeply nested trees; avoids prop-drilling.
- **Redux / Zustand** — For large-scale global state management.
- **URL/Query params** — For shareable UI state (e.g., filters).

In this project, `App.jsx` owns all state and shares it with `Banner`, `TicketCard`, and `TaskStatus` via props.

---

### 5. How is event handling done in React?

React uses **synthetic events** — a cross-browser wrapper around native browser events. Event handlers are attached as camelCase attributes directly in JSX.

**Syntax:**
```jsx
<button onClick={handleClick}>Click Me</button>
```

**Key differences from HTML:**
- HTML uses lowercase `onclick`; React uses camelCase `onClick`.
- HTML uses string values (`onclick="..."`); React passes a function reference.
- React's synthetic events work the same across all browsers.

**Common events used in this project:**

```jsx
// Clicking a ticket card to add it to In Progress
<div onClick={() => onCardClick(ticket)}>...</div>

// Clicking Complete to resolve a task
<button onClick={() => onComplete(task)}>Complete</button>

// Hamburger menu toggle
<button onClick={() => setMenuOpen(!menuOpen)}>...</button>
```

To prevent the default browser behavior, use `event.preventDefault()`. To stop event bubbling, use `event.stopPropagation()`.

---
