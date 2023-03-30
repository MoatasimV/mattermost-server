// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package app

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestGetPlaybookDetailsURL(t *testing.T) {
	require.Equal(t,
		"http://takwen.co/do/playbooks/playbooks/playbookTestId",
		getPlaybookDetailsURL("http://takwen.co/do", "playbookTestId"),
	)
}

func TestGetPlaybooksNewURL(t *testing.T) {
	require.Equal(t,
		"http://takwen.co/do/playbooks/playbooks/new",
		getPlaybooksNewURL("http://takwen.co/do"),
	)
}

func TestGetPlaybooksURL(t *testing.T) {
	require.Equal(t,
		"http://takwen.co/do/playbooks/playbooks",
		getPlaybooksURL("http://takwen.co/do"),
	)
}

func TestGetPlaybookDetailsRelativeURL(t *testing.T) {
	require.Equal(t,
		"/playbooks/playbooks/testPlaybookId",
		GetPlaybookDetailsRelativeURL("testPlaybookId"),
	)
}

func TestGetRunDetailsRelativeURL(t *testing.T) {
	require.Equal(t,
		"/playbooks/runs/testPlaybookRunId",
		GetRunDetailsRelativeURL("testPlaybookRunId"),
	)
}

func TestGetRunDetailsURL(t *testing.T) {
	require.Equal(t,
		"http://takwen.co/do/playbooks/runs/testPlaybookRunId",
		getRunDetailsURL("http://takwen.co/do", "testPlaybookRunId"),
	)
}

func TestGetRunRetrospectiveURL(t *testing.T) {
	require.Equal(t,
		"http://takwen.co/do/playbooks/runs/testPlaybookRunId/retrospective",
		getRunRetrospectiveURL("http://takwen.co/do", "testPlaybookRunId"),
	)
}
