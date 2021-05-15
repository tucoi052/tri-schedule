import moment from 'moment';
export const getInDay = (inDay, schedules) => {
  let inday = inDay;
  let sub = new Array();
  if (!!schedules)
    schedules.forEach((e) => {
      e.courseSubject.timetables.forEach((i) => {
        if (inday < new Date(i.endDate) && inday > new Date(i.startDate))
          for (
            let date = new Date();
            date <= new Date(i.endDate);
            date.setDate(date.getDate() + 1)
          ) {
            if (
              date.toISOString().split('T')[0] ==
              inday.toISOString().split('T')[0]
            ) {
              if (i.weekIndex == inday.getDay() + 1) {
                sub.push({
                  subjectName: e.subjectName,
                  class: e.subjectCode
                    .split(' ')
                    [e.subjectCode.split(' ').length - 1].replace(/[()]/g, ''),
                  weekIndex: i.weekIndex,
                  startHour: i.startHour,
                  endHour: i.endHour,
                  roomName: i.roomName,
                });
              }
            }
          }
      });
    });
  return (scheduleInDay = sub.sort((a, b) => {
    return a.startHour.start > b.startHour.start ? 1 : -1;
  }));
};

export const getAll = (schedules) => {
  let timetables = {};
  for (
    let date = new Date();
    date <= new Date('2022');
    date.setDate(date.getDate() + 1)
  ) {
    let temp = getInDay(date, schedules);
    if (temp.length) {
      let inDay = new Date(date);
      timetables[moment(inDay).format('DD/MM/YYYY')] = temp;
    }
  }
  return timetables;
};
