import {DateTime} from 'luxon';

const MAP_MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export const getLocaleDate = (date?: string) => {
  const localeDate = date ? DateTime.fromISO(date) : DateTime.now();

  return localeDate.setZone('UTC').setLocale('es-US');
};

export const getCurrentMonth = () => {
  const localeDate = getLocaleDate();

  return {
    number: localeDate.month,
    name: MAP_MONTHS[localeDate.month - 1], // toFormat method on Luxon not working well on iOS Simulator
  };
};

export const getFullDate = (date?: string): string => {
  const localeDate = getLocaleDate(date);

  return `${localeDate.day} de ${MAP_MONTHS[localeDate.month - 1]}, ${
    localeDate.year
  }`;
};
