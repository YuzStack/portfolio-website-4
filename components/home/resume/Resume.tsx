import ResumeCard from './ResumeCard';
import { resumeEdus, resumeExps } from '@/constants/constants';

export default function Resume() {
  return (
    <section className='py-20'>
      <div className='mx-auto grid w-[90%] gap-10 sm:w-[70%] xl:grid-cols-2'>
        {/* WORK */}
        <div>
          <h1 className='text-primary-50 text-3xl font-bold sm:text-4xl'>
            My Work <span className='text-cyan-200'>Experience</span>
          </h1>
          <ul
            data-aos='zoom-in'
            data-aos-anchor-placement='top-center'
            className='mt-10'
          >
            {resumeExps.map((exp) => (
              <ResumeCard
                key={exp.role}
                Icon={exp.Icon}
                role={exp.role}
                description={exp.description}
              />
            ))}
          </ul>
        </div>

        {/* EDUCATION */}
        <div>
          <h1 className='text-primary-50 text-3xl font-bold sm:text-4xl'>
            My <span className='text-cyan-200'>Education</span>
          </h1>
          <ul
            data-aos='zoom-out'
            data-aos-anchor-placement='top-center'
            data-aos-delay='300'
            className='mt-10'
          >
            {resumeEdus.map((edu) => (
              <ResumeCard
                key={edu.role}
                Icon={edu.Icon}
                role={edu.role}
                description={edu.description}
                date={edu.date}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
