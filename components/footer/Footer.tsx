export default function Footer() {
  return (
    <footer className='bg-blue-900/20 p-5'>
      <p className='text-primary-50/70 text-center text-lg'>
        Copyright ⓒ Yusuf Oyinlola &mdash; Personal Portfolio Website,{' '}
        {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}
