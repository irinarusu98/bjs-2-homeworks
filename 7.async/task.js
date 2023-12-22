class AlarmClock {
    constructor() {
        this.alarmCollection = [];  //свойство для хранения коллекции звонков alarmCollection с начальным значением пустого массива.
        this.intervalId = null;     // Создайте свойство intervalId для хранения id таймера без начального значения.
    }

    //добавляем новый звонок в коллекцию существующих
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
            return;
        }

        this.alarmCollection.push(
            {
                callback,
                time,
                canCall: true
            }
        )
    }

    removeClock(time) {         //удаляет звонки по определённому времени
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);  //Удалите из массива звонков те, у которых time совпадает со значением аргумента
    }

    getCurrentFormattedTime() {      //возвращает текущее время в строковом формате HH:MM
        let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        return currentTime;
    }

    start() {    //запускает будильник
        if (this.intervalId) {
            return;            //Если в нём присутствует значение, то завершайте выполнение метода.
        }

        //Создавайте новый интервал
        this.intervalId = setInterval(() => {
            let currentTime = this.getCurrentFormattedTime();

            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);
    }

    //останавка выполнения интервала будильника
    stop() {
        clearInterval(this.intervalId);      //Вызовите функцию clearInterval для удаления интервала.
        this.intervalId = null;              // Сбросьте значение из свойства intervalId
    }

    resetAllCalls() {                        //сбрасывает возможность запуска всех звонков.
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    // удаляет все звонки
    clearAlarms() {
        this.stop();           // Остановка интервала
        this.alarmCollection.length = 0;    // Очистка коллекции звонков
    }
}
