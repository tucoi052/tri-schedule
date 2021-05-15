import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginTop: 100,
  },
  container: {},
  currentDayLesson: {
    height: '100%',
    padding: 10,
  },
  smallText: {
    fontSize: 13,
  },
  currentDateHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  subjectList: {
    marginTop: 20,
    height: 400,
  },
  noSubject: {
    alignItems: 'center',
  },
  noSubjectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noSubjectDescription: {
    fontSize: 15,
    marginTop: 6,
  },
});

export default styles;
