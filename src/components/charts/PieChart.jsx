import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ moduleName }) => {
  const labels = [
    'UX/UI',
    'HTML/CSS/JavaScript',
    'Backend',
    'Vue.js',
    'React JS',
    'Agile Development'
  ];

  const backgroundColors = [
    'rgba(255, 99, 132, 0.1)',
    'rgba(54, 162, 235, 0.1)',
    'rgba(255, 206, 86, 0.1)',
    'rgba(75, 192, 192, 0.1)',
    'rgba(153, 102, 255, 0.1)',
    'rgba(255, 159, 64, 0.1)'
  ];

  const borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ];

  if (moduleName) {
    const moduleIndex = labels.indexOf(moduleName);
    if (moduleIndex !== -1) {
      backgroundColors[moduleIndex] = borderColors[moduleIndex];
    }
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Modules',
        data: [1, 4, 2, 6, 6, 1],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
        hoverOffset: 10
      }
    ]
  };

  const totalWeeks = data.datasets[0].data.reduce((acc, curr) => acc + curr);

  const options = {
    responsive: true,
    layout: {
      padding: 0,
      margin: 0
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const percentage = (context.parsed / totalWeeks) * 100;
            const weekText = context.parsed > 1 ? 'Veckor' : 'Vecka';
            return `${context.label} ${context.parsed} ${weekText}: ${percentage}%`;
          }
        }
      },
      legend: {
        labels: {
          color: '#fff',
          font: {
            size: 18
          }
        },
        display: true,
        position: 'top',
        align: 'top'
      }
    }
    // onResize: (chart, size) => {
    //   console.log(chart);
    // }
  };

  return <Pie width={400} height={300} data={data} options={options} />;
};

export default PieChart;
