You must have 'yarn' or 'npm' installed on your system to install the dependencies
To install yarn run the command on your linux terminal or VS-Code terminal:

- 'sudo apt update && sudo apt install yarn'

## Running the Project using yarn

- unzip the folder
- 'cd basic-app' [changes the directory to the project folder]
- 'yarn install' [installs all the dependencies]
- 'yarn start' [runs the app on the localhost: 'http://localhost:3000/']

## Running the Project using npm

- unzip the folder
- 'cd basic-app' <Project-Folder-Name> [changes the directory to the project folder]
- 'npm install' [installs all the dependencies]
- 'npm start' [runs the app on the localhost: 'http://localhost:3000/']

## Assumptions/constraints

- Roll No. entered should be Unique.
- Marks should be Integer (not float type).
- Status will be 'None' if 'Marks' field is blank.
- All the data is stored in the local-storage of the browser.

## Home Page

### Marks

- Marks field is editable
- Enter 'Marks'
- status will change dynamically on the basis of marks.
- if marks >50, status will be 'Pass'.
- if marks <=50, status will be 'Fail'.
- if marks is not filled, status will be 'None'.

### open-EntrySheet

- Enter the details of the student and click submit button to add an Entry to the students table.
- All the fields must be filled to add an Entry successfully.
- on successful submission, NewEntrySheet will close and entry will be added to the students table.

### Reset button

- Resets all the students data to the static_data provided in the app.

### 'Delete All Entries' Button

- Deletes all the current entries in the students table.
