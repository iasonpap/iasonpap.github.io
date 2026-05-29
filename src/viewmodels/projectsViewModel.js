import { getAllProjects, getProjectBySlug } from '../models/projects'

export function fetchProjects() {
  // In future this could be async/fetch; keep sync for now.
  return getAllProjects()
}

export function fetchProject(slug) {
  return getProjectBySlug(slug)
}

export default {
  fetchProjects,
  fetchProject,
}
