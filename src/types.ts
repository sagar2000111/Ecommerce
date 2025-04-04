export interface RepoCardProps {
  avatarUrl: string;
  username: string;
  repoName: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  onPress: () => void;
}
