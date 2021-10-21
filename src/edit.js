import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { UFRBlockHeader } from 'wp-idg-ufr__block-components';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function edit({ isSelected }) {
	const template = [
		['create-block/ufr-avatar', { type: 'img' }],
		['core/heading', { placeholder: 'Book Title' }],
		['core/heading', { placeholder: 'Book Title' }],
		['core/heading', { placeholder: 'Book Title' }],
		['core/heading', { placeholder: 'Book Title' }],
	];

	return (
		<div
			{...useBlockProps({
				className: `ufr-block-component ${isSelected ? 'edit' : ''}`,
			})}
		>
			<div className="row align-items-center">
				<div className="col">
					<div
						className="config"
						style={{ display: isSelected ? '' : 'none' }}
					>
						<UFRBlockHeader
							title="Cartão"
							description="Configure a aparenência do cartão abaixo. Outras configurações podem estar disponíveis no menu á direita."
						/>
					</div>

					<div className="br-card mt-5">
						<div className="card-content">
							<InnerBlocks template={template} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
