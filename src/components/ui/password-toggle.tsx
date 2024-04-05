import { EyeClosed, EyeOpen } from '../Icons';

function PasswordToggle({
  setShowPassword,
  showPassword,
}: {
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword: boolean;
}) {
  return (
    <button
      aria-label='show password'
      type='button'
      tabIndex={-1}
      className='absolute right-4 top-5'
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <EyeOpen /> : <EyeClosed />}
    </button>
  );
}

export default PasswordToggle;
