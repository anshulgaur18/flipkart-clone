import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TreeItem from '@mui/lab/TreeItem';
import './Treeview.css';

export default function MultiSelectTreeView() {
  return (
    <TreeView
      aria-label="multi-select"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronLeftIcon />}
      multiSelect
      
    >
    <div className="treeviewDiv">
    <TreeItem nodeId="1" label="Men's Footwear">
    <div className="treeviewDiv2">
    <TreeItem nodeId="2" label="Casual Shoes" />
        <TreeItem nodeId="3" label="Sports Shoes" />
        <TreeItem nodeId="4" label="Formal Shoes" />
        <TreeItem nodeId="5" label="Sandals & Floaters" />
        <TreeItem nodeId="6" label="Slippers & Flip Flops" />
    </div>
      </TreeItem>
    </div>
      </TreeView>
  );
}