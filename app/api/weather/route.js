import { NextResponse } from 'next/server';

// get weather from OpenWeatherMap
export async function GET() {
  const apiKey = process.env.WEATHER_API_KEY;
  const city = 'Cape Town'; // hardcoded for now
  
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Weather API key not configured' },
      { status: 500 }
    );
  }
  
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch weather data' },
        { status: 500 }
      );
    }
    
    const data = await response.json();
    
    // return simplified data
    const theWeather = {
      location: data.name,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description
    };
    
    return NextResponse.json(theWeather);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching weather data' },
      { status: 500 }
    );
  }
}
