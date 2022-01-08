export const colors = [
    '#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD', 
    '#8C564B', '#CFECF9', '#7F7F7F', '#BCBD22', '#17BECF'
];

export const getColor = (i: number) => i !== 0 ? colors[Math.abs(i % colors.length)] : colors[0];
