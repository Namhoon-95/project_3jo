import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tagbox from '../../components/write/TagBox';

import { changeField } from '../../modules/write';

const TagboxContainer = () => {
    const dispatch = useDispatch();
    const tags = useSelector(state => state.write.tags);

    const onChangeTags = nextTags => {
        dispatch(
            changeField({
                key: 'tags',
                value: nextTags
            })
        );
    };
    return <Tagbox
        onChangeTags={onChangeTags}
        tags={tags} />
};

export default TagboxContainer;
