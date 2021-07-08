import { useState } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'

export default function ProjectTile({ project }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <motion.button onClick={() => setIsExpanded((_) => !_)} type="button" className={classNames('text-left block bg-white rounded-2xl transition duration-150 ease-in-out shadow-2xl hover:shadow p-6 space-y-6')}>
            <div className="space-y-2">
                <p className="text-2xl font-medium">{project.title}</p>
                <p>{project.description.slice(0, isExpanded ? project.description.length : 100)}...</p>
            </div>
            {isExpanded && project.image && <img className="block w-full rounded-2xl" src={project.image} alt="" />}

            <div className="flex">
                <p className="flex-1 space-x-4 text-xs">
                    {project.links.project && (
                        <a target="_blank" rel="noreferrer" href={project.links.project}>
                            <i className="fas fa-globe mr-2" />
                            <span>Visit Project</span>
                        </a>
                    )}

                    {project.links.github && (
                        <a target="_blank" rel="noreferrer" href={project.links.github}>
                            <i className="fab fa-github" />
                        </a>
                    )}
                </p>
                <p className="text-right font-mono text-xs opacity-50">{project.year}</p>
            </div>
        </motion.button>
    )
}
