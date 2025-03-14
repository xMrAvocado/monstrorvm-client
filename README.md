# MONSTRORVM

## [See the App!](https://monstrorvm.netlify.app/)

![App Logo](https://res.cloudinary.com/dh8naz2ht/image/upload/v1741614866/Monstrorvm_zo0o5h.png)

## Description

Website created with React, which provides a list of the Hunt:Showdown monsters by category and pages with the details of each one.
In addition to viewing the list, users can add, delete, or edit elements.

#### [Client Repo here](www.your-github-url-here.com)
#### [Server Repo here](www.your-github-url-here.com)

## Technologies, Libraries & APIs used

**HTML, CSS, Javascript, React, axios, spinners**

## Backlog Functionalities

**User can upload photos without needing to copy-paste an URL**

# Client Structure

## User Stories

- **NotFound** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **Error** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault.
- **HomePage** - As a user I want to be able to access the homepage so that I can select the category of the monster I want to check.
- **About** - As a user I want to see who is the identity that created the web page I´m in.
- **AddMonster** - As a user I want to be able to create a new monster in case I run into one.
- **CategoryList** - As a user I want to be able to see and interact with the list of categories of the monsters.
- **EditMonster** - As a user I want to be able to edit an existing monster in case I find something new about it or it changes one of it´s atributes.
- **MonsterDetails** - As a user I want to see the details and description of the monster.
- **MonsterList** - As a user I want to create see and interact with the list of the monsters ordered by category.

## React Router Routes (React App)
| Path                            | Page            | Components        | Behavior                                                                      |
| ------------------------------- | ----------------| ----------------  |  ---------------------------------------------------------------------------- |
| `/`                             | HomePage        | CategoryList      | Home page where a list of categories are shown                                |
| `/about`                        | About           |                   | Shows the information of the web page and the creator                         |
| `/monsters/:monsterId`          | MonsterDetails  | EditMonster       | Shows the details of the monster, let the user edit them or delete the monter |
| `/monsters/category/:categoryId`| MonsterList     |                   | Shows the list of the monsters ordered by category                            |
| `/add-monster`                  | AddMonster      |                   | Creates a new monster                                                         |

## Other Components

- Navbar
- Sidebar
- Footer
  
## Links

### Developer

[Samuel Pérez Besada](https://github.com/xMrAvocado)

### Project

[Repository Link Client](https://github.com/xMrAvocado/monstrorvm-client)

[Repository Link Server](https://github.com/xMrAvocado/monstrorvm-server)

[Deploy Link](https://monstrorvm.netlify.app/)

### Planing

[Link to the planing board](https://excalidraw.com/#json=99u4AuvrFBE9i508Flt59,wP893E78xQjT3v4k9dX_hg)

### Slides

[Slides Link](www.your-slides-url-here.com)