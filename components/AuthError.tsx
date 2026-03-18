interface AuthErrorProps {
  message: string;
}

export default function AuthError({ message }: AuthErrorProps) {
  return (
    <p className='rounded-sm bg-red-50 px-3 py-2 text-center text-xs text-red-600'>{message}</p>
  );
}
