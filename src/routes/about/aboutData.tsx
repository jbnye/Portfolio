import { TypescriptSVG, JavascriptSVG, PythonSVG, HTML5SVG, CSSSVG, ReactSVG, TailwindCSSSVG, ViteSVG, NodeJSSVG, CPPSVG,
    ExpressSVG, PostgresSVG, MySQLSVG, GitSVG, GithubWhiteSVG, DockerSVG, RailwaySVG } from "@/assets/svgs/svgs";



export const languages: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    "Typescript": TypescriptSVG,
    "Javascript": JavascriptSVG,
    "Python": PythonSVG,
    "HTML5": HTML5SVG,
    "CSS": CSSSVG,
    "C++": CPPSVG 
}

export  const frontend: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    "React": ReactSVG,
    "Tailwind": TailwindCSSSVG,
    "Vite": ViteSVG,
}

export  const backend: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    "Node.js": NodeJSSVG,
    "Express": ExpressSVG,
}

export  const databases: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    "PostgreSQL": PostgresSVG,
    "MySQL": MySQLSVG,
}
export  const devOpsAndTools: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    "Git": GitSVG,
    "GitHub": GithubWhiteSVG,
    "Docker": DockerSVG,
    "Railway": RailwaySVG,
}
