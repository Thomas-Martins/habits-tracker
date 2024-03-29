import { useEffect, useState } from 'react'

interface CircleProgressBarProps {
  percentage: number
  circleWidth: number
  color: string
}

export default function CircleProgressBar({
  percentage,
  circleWidth,
  color,
}: CircleProgressBarProps) {
  const radius = 70
  const dashArray = radius * Math.PI * 2
  const [dashOffset, setDashOffset] = useState(dashArray)

  useEffect(() => {
    const newDashOffset = dashArray - (dashArray * percentage) / 100
    setDashOffset(newDashOffset)
  }, [percentage, dashArray])

  return (
    <div className="">
      <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-background"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress"
          style={{
            stroke: color,
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            transition: 'stroke-dashoffset 0.5s ease-in-out',
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
      </svg>
    </div>
  )
}
