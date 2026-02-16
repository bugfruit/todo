# Todo App

Simple todo app built with Next.js and Tailwind.

## Features

- CRUD operations for  todos
- Mark todos as done
- Hide completed todos
- Shows weather info at the top

## Setup

Make sure you have Node.js installed (v16+).

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file and add your OpenWeatherMap API key:
```
WEATHER_API_KEY=api_key_XXXX
```


### Running

Start the dev server:

```bash
npm run dev
```

Open and view the app on: http://localhost:3000

### Testing

Run the unit tests for the store:

```bash
npm test
```

This will test the core todo CRUD operations


## Important

- Data is stored in memory, so todos will be lost when you restart the server
- Weather defaults to Cape Town

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS
- OpenWeatherMap API
