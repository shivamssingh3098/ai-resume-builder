import { forwardRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import ClassicTemplate from './templates/ClassicTemplate';
import ModernTemplate from './templates/ModernTemplate';
import MinimalTemplate from './templates/MinimalTemplate';

const templateMap = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  minimal: MinimalTemplate,
};

const ResumePreview = forwardRef(function ResumePreview({ scale = 0.55 }, ref) {
  const { state } = useResume();
  const Template = templateMap[state.selectedTemplate] || ModernTemplate;

  return (
    <div className="preview-container">
      <div
        className="preview-wrapper"
        ref={ref}
        style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
      >
        <Template data={state} />
      </div>
    </div>
  );
});

export default ResumePreview;
