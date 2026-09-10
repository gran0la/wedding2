import FullCalendar, { useCalendarController } from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch"; // YOUR THEME
import dayGridPlugin from "@fullcalendar/react/daygrid";

// stylesheets
import '@fullcalendar/react/skeleton.css'; // ALWAYS NEED SKELETON
import '@fullcalendar/react/themes/monarch/theme.css'; // YOUR THEME
import '@fullcalendar/react/themes/monarch/palettes/purple.css'; // YOUR THEME'S PALETTE
import './Calendar.css';

export default function Calendar() {
  const handleDateClick = (info: any) => {
    alert(info.dateStr);
  }

  const headerObj = {
    start: "title",
    center: "",
    end: "prev next today"
  }

  const footerObj = {
    start: "today, title",
    center: "",
    end: ""
  }


  return (
    <>
      <FullCalendar
        plugins={[themePlugin, dayGridPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}

        headerToolbar={headerObj}
        footerToolbar={footerObj}

        toolbarTitleClass={"toolbar-title"}
        buttonClass={"calendar-buttons"}

        dayCellClass={"day-cells"}
      />
    </>
  );
}
