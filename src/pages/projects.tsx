import projects from '../data/projects.json'
import ProjectTile from '../components/ProjectTile'
import Link from 'next/link'

export default function ProjectsPage() {
    return (
        <>
            <div className="flex items-center justify-center bg-opacity-85 min-h-screen max-w-3xl mx-auto p-12 py-12 md:p-24 md:py-24 space-y-24">
                <div className="space-y-8">
                    <Link href="/">
                        <a className="hover:underline opacity-75 text-xs font-medium">&larr; Back</a>
                    </Link>
                    <div className="grid grid-cols-1  w-full gap-6">
                        {projects.map((project, index) => (
                            <ProjectTile project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
