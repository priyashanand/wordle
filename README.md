# Wordle Game

A simple Wordle game implemented using Node.js, Express, SQLite, and EJS.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Introduction

This project is a basic implementation of the Wordle game where players guess a word that is randomly selected from a predefined list. The server is built using Node.js and Express, and the data is stored in an SQLite database. The frontend is rendered using the EJS templating engine.

## Features

- Random selection of words from an SQLite database.
- Scrambled display of the target word for an added challenge.
- Simple web interface for users to input their guesses.

## Prerequisites

- Node.js installed (Download and install from [https://nodejs.org/](https://nodejs.org/))
- npm (Node Package Manager) installed

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/wordle-game.git
cd wordle-game

```

2. Install Dependencies
   npm install

## Usage

- Start the application
      npm run project
- Open your browser and navigate to http://localhost:3000.
- Play the Wordle game by guessing the scrambled word.


## Project Structure
- wordle-game/
  - public/
    - styles/
      - style.css
    - script.js
  - views/
    - index.ejs
  - init_db.sql
  - app.js
  - database.db
  - README.md
