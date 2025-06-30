import './App.css'
import UserCard from './components/UserCard'
import EventCard from './components/EventCard'
import BookCard from './components/BookCard'

function App() {

  return (
    <>
      <UserCard name="Sasha" isOnline avatarUrl="https://fsx1.itstep.org/api/v1/files/9Y3VgGLBD1iyArtTt8ajhwWJ4k5WxDPd" age="17" email="test@gmail.com" />
      <UserCard name="Anton" avatarUrl="https://avatars.githubusercontent.com/u/197484190?v=4" age="16" email="testik@gmail.com" />
      <hr />
      <EventCard title="React Meetup" date="2025-07-01" isFree />
      <EventCard title="C# Meetup" date="2025-07-02" />
      <EventCard title="JavaScript Conference" date="2023-11-20" />
      <hr />
      <BookCard title="The Great Gatsby" author="F. Scott Fitzgerald" available year="1925" genre="Novel" />
      <BookCard title="1984" author="George Orwell" year="1949" genre="Dystopian" />
    </>
  )
}

export default App
