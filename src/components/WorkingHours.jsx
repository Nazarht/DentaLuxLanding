function WorkingHours() {
  return (
    <div className="hours">
      <div className="container">
        <div className="grid grid__desktop">
          <div className="hours__title grid__item--big-1-6  grid__item--med-1-3">
            <p className="hours__sub-text">Плануйте свій візит</p>
            <h2 className="hours__main-text">Графік роботи</h2>
          </div>
          <div className="hours__time-container grid__item--big-7-12 grid__item--med-4-6">
            <div className="hours__time-section">
              <h3 className="hours__day">Понеділок</h3>
              <p className="hours__time">8:00 - 18:00</p>
            </div>
            <div className="hours__time-section">
              <h3 className="hours__day">Вівторок</h3>
              <p className="hours__time">8:00 - 18:00</p>
            </div>
            <div className="hours__time-section">
              <h3 className="hours__day">Середа</h3>
              <p className="hours__time">8:00 - 18:00</p>
            </div>
            <div className="hours__time-section">
              <h3 className="hours__day">Четвер</h3>
              <p className="hours__time">8:00 - 18:00</p>
            </div>
            <div className="hours__time-section">
              <h3 className="hours__day">Пятниця</h3>
              <p className="hours__time">8:00 - 18:00</p>
            </div>
            <div className="hours__time-section">
              <h3 className="hours__day">Субота</h3>
              <p className="hours__time">9:00 - 14:00</p>
            </div>
            <div className="hours__time-section">
              <h3 className="hours__day">Неділя</h3>
              <p className="hours__time">Вихідний</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkingHours;
