import { usePage } from '@inertiajs/react'

export default function Dashboard() {
  const { props } = usePage()

  console.log(props)

  return (
    <div>
      <div>{props.currentUser.username}</div>
      <form action="/logout">
        <button type="submit">Logout</button>
      </form>
    </div>
  )
}
