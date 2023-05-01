// This component displays a 7-day forecast for a particular location while
// using framer motion to make it visually appealing.

// Imported modules
import {
  Accordion,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItem,
  AccordionItemButton,
} from "react-accessible-accordion";
import { motion } from "framer-motion";
import "./forecast.css";

// Array to store weekdays
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Main method that takes in the "data" object as a prop
function Forecast({ data }) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  // Returns an Accordion component to display the forecast
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <label className="title">7-day forecast</label>
      </motion.div>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      alt="weather"
                      className="icon-small"
                      src={`/icons/${item.weather[0].icon}.png`}
                    />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}°C /
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
            </motion.div>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label className="daily-details-value">
                    {item.main.pressure} hPa
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label className="daily-details-value">
                    {item.main.humidity}%
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label className="daily-details-value">
                    {item.clouds.all}%
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label className="daily-details-value">
                    {item.wind.speed} m/s
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label className="daily-details-value">
                    {item.main.sea_level}m
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label className="daily-details-value">
                    {Math.round(item.main.feels_like)}°C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;
