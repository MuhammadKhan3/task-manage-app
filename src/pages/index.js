import Image from 'next/image'
import { Inter } from 'next/font/google'
import Project from './project'
import ProjectDetail from './projectdetails'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <ProjectDetail/>
    </div>
  )
}
