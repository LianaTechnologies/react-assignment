# React Example

Welcome to the LianaCrew React exercise. The purpose of this exercise is to demonstrate a suitable level of competence using [React](https://reactjs.org/).

### ★ Requirements

`node@16.13.0+`  
`npm@6.14.16+`

### ★ Task

★ Convert `src/exercise/index.html` into **React**. Provide the following components, declared in their own separate files, using roughly the same structure:

---
1. A component that renders a `<header>` -element. The content should be supplied via a `text` -prop.
2. A component that renders a `<form>` -element. The content should be supplied as `children`.
3. A component that renders a `<label>` -element containing an `<i>` -element. It has the following props:
	1. `name`: Passed to the `for` -attribute of `<label>`.
	2. `type`: Passed to one of the CSS classes of `<i>`. This controls what icon (`email`, `pencil`, `user`) is rendered.
	3. `text`: The main text content after `<i>`.
4. A component that renders inputs. It has the following props:
	1. `name`: Passed to the `name` -attribute of the input.
	2. `id`: Passed to the `id` -attribute of the input. This should default to `props.name`, above.
	3. `value`: Passed as the `value` -attribute of the input. This should default to `undefined`.
	4. `type`: Determines the type of input rendered:
		1. `text`: Renders an `<input type="text">` -input.
		2. `textarea`: Renders an `<textarea>` -input.
		3. `submit`: Renders an `<input type="submit">` -input. This input does not use `props.name` or `props.id`.
---
		
<u>Clicking on `<submit>` should print out the current form values via the `console`.</u>

Feel free to add other properties to your components to accomplish this. Use `src/solution/app.js` as your starting point.

**Important note:** You should accomplish your task strictly via React! You should not manipulate the DOM with, for example, jQuery or the Selector API in any way!

### ★ Usage

1. `npm install` to retrieve module dependencies.
2. Run `npx webpack-cli serve` to run the [development server](https://webpack.js.org/configuration/dev-server/).
3. Navigate to `localhost:3000`.
4. Provide your solution under `src/solution/` - Changes should update automatically.

### ★ Bonus tasks

The following tasks are NOT REQUIRED, but will be considered as further proof of your expertise. The tasks should be done in order, as they depend on each other.

1. Provide the following constraints:
	* Your `email` -input should only accept email addresses of the correct format (`foo.bar@example.com`).
	* Your `message` -input should have a maximum length of 255 characters.
	* When clicking on `<submit>`, the `console` output should show an error instead of the usual output if the constraints fail.
2. Provide an optional input:
	* Modify your "input component" to be able to render `<select>` -inputs when `props.type === 'select'`.
	* Include the above `<select>` in your `<form>` with a few options (for example: **Topic**). This input should be empty by default.
	* When clicking on `<submit>`, your "optional input" should not appear in the `console` output unless given.
3. Provide validation feedback:
	* Modify your `text` and `textarea` -type inputs to have the `required` -attribute.
	* Based on task #1, when clicking on `<submit>`, check if your `<form>` is:
		* _Valid_: Display the message "Everything OK!" under the `<submit>` -button.
		* _NOT valid_: Modify your `<label>` component to display an error message for each individual input that is incorrect.
	* Based on task #2, your `select` -type input should not affect the validation.  

