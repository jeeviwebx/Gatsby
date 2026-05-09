import React, { useCallback, useEffect, useState } from 'react';

const AskAIButton = ({ onClick, isOpen }) => (
	<button className="ask-main" onClick={onClick} aria-expanded={isOpen} type="button">
		Ask AI
	</button>
);

const AskAIPanel = ({ open, onClose }) => (
	<aside
		className={`iframe-panel${open ? ' open' : ''}`}
		aria-hidden={!open}
		onKeyDown={(e) => {
			if (e.key === 'Escape') onClose();
		}}
	>
		<button className="agent-close-btn" aria-label="Close assistant" onClick={onClose} type="button">
			×
		</button>
		<div className="panel-body">
			<iframe
				src="https://syncfusion.boldagent.ai/widgetscript-api/v1/widgets/80549865-7c27-4004-af5c-3f8e0a0b29bc/iframe"
				allow="microphone"
				width="100%"
				style={{ height: '100%' }}
				frameBorder="0"
				title="BoldAgent"
			/>
		</div>
	</aside>
);

const AskAI = () => {
	const [agentOpen, setAgentOpen] = useState(false);

	const toggleAgentPanel = useCallback((e) => {
		e?.stopPropagation?.();
		e?.nativeEvent?.stopImmediatePropagation?.();
		setAgentOpen((prev) => !prev);
	}, []);

	const closeAgentPanel = useCallback((e) => {
		e?.stopPropagation?.();
		setAgentOpen(false);
	}, []);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') setAgentOpen(false);
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<>
			<div className="ask-container">
				<div className="ask-split-button">
					<AskAIButton onClick={toggleAgentPanel} isOpen={agentOpen} />
				</div>
			</div>

			<AskAIPanel open={agentOpen} onClose={closeAgentPanel} />
		</>
	);
};

export default AskAI;
export { AskAIButton, AskAIPanel };
