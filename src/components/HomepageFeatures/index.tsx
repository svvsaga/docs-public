import React, { useRef, useEffect } from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

const initialize = (canvas) => {
  console.log(canvas)
  const config = {}
  config.width = canvas.width = window.innerWidth
  config.height = canvas.height = window.innerHeight

  config.shapes = new Array()
  config.size = 30
  config.num = 10
  config.maxDist = 0

  const ajust = (config.num * config.size) / 2 - config.size / 2

  for (let y = 0; y < config.num; y++) {
    for (let x = 0; x < config.num; x++) {
      const params = {}
      const ny = config.size * y - ajust
      const nx = config.size * x - ajust
      const dist = Math.sqrt(nx * nx + ny * ny)
      const angle = Math.atan2(ny, nx)
      const index = y * config.num + x

      params.x = nx
      params.y = ny
      params.d = dist
      params.a = angle
      params.i = index

      config.maxDist = Math.max(dist, config.maxDist)

      config.shapes.push(params)
    }
  }
  return config
}

// Referred to https://easings.net/ Thank you so much.
const ease = (x) => {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2
}

const draw = (config, ctx, t: number) => {
  t *= 0.00005

  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  ctx.clearRect(0, 0, config.width, config.height)
  ctx.translate(config.width / 2, config.height / 2)

  for (let j = 0; j < 3; j++) {
    let color

    if (j === 0) color = '#FF0000'
    if (j === 1) color = '#00FF00'
    if (j === 2) color = '#0000FF'
    for (let i = 0; i < config.shapes.length; i++) {
      ctx.save()

      let scaledT
      if (i % 2 === 0) {
        scaledT =
          (t -
            j * 0.01 -
            (config.shapes.length - config.shapes[i].i) /
              config.shapes.length) %
          1
      } else {
        scaledT =
          (t +
            j * 0.01 +
            (config.shapes.length - config.shapes[i].i) /
              config.shapes.length) %
          1
      }

      scaledT = ease(Math.abs(scaledT))

      let moveY = 0
      let moveX = 0
      if (scaledT < 0.25) {
        moveX = Utils.map(scaledT, 0, 0.25, 0, config.size)
        moveY = Utils.map(scaledT, 0, 0.25, 0, 0)
      } else if (scaledT >= 0.25 && scaledT < 0.5) {
        moveX = Utils.map(scaledT, 0.25, 0.5, config.size, config.size)
        moveY = Utils.map(scaledT, 0.25, 0.5, 0, config.size)
      } else if (scaledT >= 0.5 && scaledT < 0.75) {
        moveX = Utils.map(scaledT, 0.5, 0.75, config.size, 0)
        moveY = Utils.map(scaledT, 0.5, 0.75, config.size, config.size)
      } else {
        moveX = Utils.map(scaledT, 0.75, 1.0, 0, 0)
        moveY = Utils.map(scaledT, 0.75, 1.0, config.size, 0)
      }

      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(
        config.shapes[i].x + moveX,
        config.shapes[i].y + moveY,
        config.size / 3,
        0,
        Math.PI * 2,
        false
      )
      ctx.fill()
      ctx.restore()
    }
  }
  ctx.restore()
  return t
}

class Utils {
  static norm(value, min, max) {
    return (value - min) / (max - min)
  }

  static lerp(norm, min, max) {
    return (max - min) * norm + min
  }

  static map(value, sourceMin, sourceMax, destMin, destMax) {
    return this.lerp(this.norm(value, sourceMin, sourceMax), destMin, destMax)
  }

  static clamp(value, min, max) {
    return Math.min(Math.max(value, min), max)
  }

  static distance(x0, y0, x1, y1) {
    const dx = x1 - x0
    const dy = y1 - y0

    return Math.sqrt(dx * dx + dy * dy)
  }

  static randomRange(min, max) {
    return min + Math.random() * (max - min)
  }

  static randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1))
  }

  static randomDist(min, max, iterations) {
    let total = 0

    for (let i = 0; i < iterations; i++) {
      total += this.randomRange(min, max)
    }

    return total / iterations
  }

  static degreesToRads(degrees) {
    return (degrees / 180) * Math.PI
  }

  static radsToDegrees(radians) {
    return (radians * 180) / Math.PI
  }

  static roundToPlaces(value, places) {
    const mult = Math.pow(10, places)

    return Math.round(value * mult) / mult
  }

  static roundNearest(value, nearest) {
    return Math.round(value / nearest) * nearest
  }
}

export default function HomepageFeatures(): JSX.Element {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const config = initialize(canvas)
    let animationFrameId
    let t = 0
    const render = () => {
      t = draw(config, context, t)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="landing-page">
          <h1 className="hero__title">Saga dokumentasjon</h1>
          <p className="hero__subtitle">
            Vi senker terskelen for å komme i gang med dataanalyse på tvers av
            vegvesenets mange ulike datakilder.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/intro">
              Les dokumentasjonen
            </Link>
          </div>
        </div>
        <canvas ref={canvasRef} width="300" height="300" />
      </div>
    </section>
  )
}
