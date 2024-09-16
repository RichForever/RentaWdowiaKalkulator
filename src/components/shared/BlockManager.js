import BlockHero from '../blocks/BlockHero';
import BlockTextWithImage from '../blocks/BlockTextWithImage';
import BlockSectionHeader from '../blocks/BlockSectionHeader';
import BlockCalculator from "../blocks/BlockCalculator";
import BlockFaq from "../blocks/BlockFaq";

const getBlockComponent = ({ __typename, ...rest }, index) => {
    let Block;

    switch (__typename) {
        case 'ComponentBlocksHero':
            Block = BlockHero;
            break;
        case 'ComponentBlocksTextWithImage':
            Block = BlockTextWithImage;
            break;
        case 'ComponentBlocksSectionHeader':
            Block = BlockSectionHeader;
            break;
        case 'ComponentBlocksCalculator':
            Block = BlockCalculator;
            break;
        case 'ComponentBlocksFaqSection':
            Block = BlockFaq;
            break;
        default:
            return null;
    }
    return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks = [] }) => {
    return <div className="space-y-16">{blocks.map(getBlockComponent)}</div>;
};

export default BlockManager;
