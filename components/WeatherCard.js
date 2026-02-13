export default function WeatherCard({ weather, error }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-bold mb-2">Weather</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : weather ? (
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">{weather.location}</span>: {weather.temperature}°C, {weather.description}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">Loading weather...</p>
      )}
    </div>
  );
}
