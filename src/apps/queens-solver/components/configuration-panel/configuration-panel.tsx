import { Card } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { EditMode, QueensEditModes } from './panel-sections/edit-mode';
import { BoardSize } from './panel-sections/board-size';

export interface ConfigurationPanelProps {
    boardSize: number;
    setBoardSize: (size: number) => void;
    editMode: QueensEditModes;
    setEditMode: (mode: QueensEditModes) => void;
    color: string;
    setColor: (color: string) => void;
}

const CONFIGURATION_PANEL_BOTTOM_MARGIN = 35;

export function ConfigurationPanel(props: ConfigurationPanelProps) {
    const {
        boardSize,
        setBoardSize,
        editMode,
        setEditMode,
        color,
        setColor
    } = props;
    const [
        configurationPanelHeight,
        setConfigurationPanelHeight
    ] = useState<number>();
    const configurationPanelRef = useRef<HTMLDivElement>(null);

    // Ensure that configuration panel is correct on initial render.
    useEffect(() => {
        resize();
    }, [configurationPanelRef.current]);

    // Ensures that configuration panel is correct on window resize.
    useEffect(() => {
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <Card
            ref={configurationPanelRef}
            sx={{
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                height: (configurationPanelHeight)
                    ? `${configurationPanelHeight}px`
                    : 'auto'
            }}
        >
            <BoardSize
                currentSize={boardSize}
                setSize={setBoardSize}
            />
            <EditMode
                editMode={editMode}
                setEditMode={setEditMode}
                color={color}
                setColor={setColor}
            />
        </Card>
    );

    function resize() {
        const configurationPanel = configurationPanelRef.current;
        if (configurationPanel) {
            const viewportHeight = window.innerHeight;
            const height = viewportHeight
                - configurationPanel.offsetTop
                - CONFIGURATION_PANEL_BOTTOM_MARGIN;
            setConfigurationPanelHeight(height);
        }
    }
}

